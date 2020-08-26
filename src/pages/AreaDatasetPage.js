import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {Warning} from "../components/Warning";
import {AreaDatasetContents} from "../components/area-dataset-page/AreaDatasetContents"
import {toTitleCase} from "../helpers/Text";
import {Breadcrumbs} from "../components/Breadcrumbs";

export class AreaDatasetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDimensionOptions: [],
            stage: 0,
        };
        this.updateErrorMessage = this.updateErrorMessage.bind(this);
        this.hideWarnings = this.hideWarnings.bind(this);
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = async () => {
        await this.getDatasetInfo();
    }

    async getDatasetInfo() {
        let datasetID = this.props.match.params.name
        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`https://api.beta.ons.gov.uk/v1/datasets/${datasetID}`, `GET`);
        this.setState(responseOBJ, async () => {
        });
    }

    hideWarnings() {
        this.setState({errorMessage: ""})
    }

    updateErrorMessage(errorMessage) {
        this.setState({errorMessage: errorMessage});
    }


    render() {
        let searchString = "";
        let errorMessage = this.state.response == null ? "" : this.state.response.errorMessage;
        if (this.state.response == null) {
            return null;
        }

        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                           performSearch={() => {
                           }}/>
                <div className={"wrapper"}>
                    <Breadcrumbs datasetID={this.props.match.params.name}
                                 datasetTheme={this.state.response.results.theme}
                                 updateErrorMessage={this.updateErrorMessage}/>
                    <AreaDatasetContents results={this.state.response.results}/>
                </div>
            </div>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>
        </div>
    }
}
