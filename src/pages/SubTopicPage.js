import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {SearchBar} from "../components/header/SearchBar";
import {Warning} from "../components/Warning";
import {SubTopicPageContent} from "../components/topic-components/SubTopicPageContent";
import {TaxTabArea} from "../components/topic-components/TaxTabArea";
import {makeRequest} from "../helpers/API";

export class SubTopicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getDatasets();
    }

    getDatasets = async () => {
        await this.fetchDatasets();
    }

    async fetchDatasets() {
        let searchString = this.props.match.params.name

        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`http://99.80.8.15:10300/search?q=${searchString}`, `GET`);

        this.setState(responseOBJ, () => {
            this.setState({responseOBJ})
        });
    }

    render() {
        let searchString = "";
        let errorMessage = this.state.response == null ? "" : this.state.response.errorMessage;
        let urlParams = new URLSearchParams(window.location.search);
        let taxTitle = urlParams.get("pageName");
        let rootName = urlParams.get("rootName");
        let datasets = (this.state.response != null) ? this.state.response.results.datasets : {}
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                           performSearch={() => {
                           }}/>
                <div className={"wrapper"}>
                    <SubTopicPageContent taxTitle={taxTitle} rootName={rootName}/>
                </div>
                <TaxTabArea datasets={datasets}/>

            </div>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>

        </div>
    }
}
