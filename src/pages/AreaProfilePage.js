import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {Warning} from "../components/Warning";
import {Breadcrumbs} from "../components/Breadcrumbs";
import {AreaProfileContents} from "../components/area-profile-components/AreaProfileContents";

export class AreaProfilePage extends React.Component {
//TODO on search query change the filters are lost
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getAreaProfile();
    }

    getAreaProfile = async () => {
        await this.fetchAreaProfile();
    }

    async fetchAreaProfile() {
        let areaID = this.props.match.params.id

        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`http://99.80.8.15:10300/area-profiles/${areaID}`, `GET`);
        this.setState(responseOBJ);
    }

    hideWarnings() {
        this.setState({response: {errorMessage: ""}})
    }

    updateErrorMessage(message) {
        if (this.state.errorMessage === "") {
            this.setState({response: {errorMessage: message}})
        }
    }

    render() {
        let searchString = "";
        let errorMessage = this.state.response == null ? "" : this.state.response.errorMessage;
        if(this.state.response == null){
            return null;
        }


        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString} shouldRedirectToSearch={false}
                           performSearch={this.performSearch}/>
                           <div className={"wrapper"}>
                {/*<Breadcrumbs datasetID={this.props.match.params.name}*/}
                {/*             datasetTheme={this.state.response.results.theme}*/}
                {/*             updateErrorMessage={this.updateErrorMessage}/>*/}
                <AreaProfileContents areaProfile={this.state.response.results}/>
                           </div>
                <Footer/>
                <Warning message={errorMessage}
                         hideWarnings={this.hideWarnings}/>
            </div>
        </div>
    }
}
