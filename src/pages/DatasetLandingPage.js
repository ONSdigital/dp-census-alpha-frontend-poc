import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Warning} from "../components/Warning";
import {DatasetLandingPageContent} from "../components/dataset-landing-page/DatasetLandingPageContent";
import {DatasetLandingPageDimensionOptions} from "../components/dataset-landing-page/DatasetLandingPageDimensionOptions";
import {SearchBar} from "../components/header/SearchBar";
import {Breadcrumbs} from "../components/Breadcrumbs";
import {makeRequest} from "../helpers/API";
import {toTitleCase} from "../helpers/Text";


export class DatasetLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDimensionOptions: [],
            stage: 0,
        };
        this.updateErrorMessage = this.updateErrorMessage.bind(this);
        this.showDimensionFor = this.showDimensionFor.bind(this);
        this.showDimensionOptionsFor = this.showDimensionOptionsFor.bind(this);
        this.updateSelectedDimensionOptions = this.updateSelectedDimensionOptions.bind(this);
        this.hideWarnings = this.hideWarnings.bind(this);
        this.changeStageTo = this.changeStageTo.bind(this);
        this.categoriesChanged = this.categoriesChanged.bind(this);
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
            await this.getVersionInfo(this.state.response.results.links.latest_version.href)
        });
    }

    async getVersionInfo(url) {
        let responseOBJ = {};
        responseOBJ.datasetDetails = await makeRequest(url, `GET`);
        // Fudged
        responseOBJ.datasetDetails.results.dimensions.forEach((dimension) => {
            dimension.categories = [
                {
                    name: "3 categories",
                    contains: ["White", "Other ethnic group", "Not applicable"],
                    selected: true
                },
                {
                    name: "6 categories",
                    contains: ["White", "Asian/Asian British", "Mixed/multiple ethnic group", "Black/African/Caribbean/Black British", "Other ethnic group", "Not applicable"],
                    selected: false
                },
                {
                    name: "8 categories",
                    contains: ["White: English/Scottish/Northern Irish/British", "White: Irish", "White: Other white", "Asian/Asian British", "Mixed/multiple ethnic group", "Black/African/Caribbean/Black British", "Other ethnic group", "Not applicable"],
                    selected: false
                },
                {
                    name: "19 categories",
                    contains: ["White: Scottish", "White: Other White British", "White: Irish", "White: Gypsy / Traveller", "White: Polish", "White: Other white", "Mixed/multiple ethnic group", "Asian: Pakistani/Pakistani Scottish/Pakistani British", "Asian: Indian/Indian Scottish/Indian British", "Asian: Bangladeshi/Bangladeshi Scottish/Bangladeshi British", "Asian: Chinese/Chinese Scottish/Chinese British", "Asian/Asian Scottish/Asian British: Other", "African: African Scottish/African British", "African: other", "Caribbean/Caribbean Scottish/ Caribbean British", "Black/Black Scottish/Black British", "Caribbean/Black: other", "Arab: Arab/Arab Scottish/Arab British", "Other ethnic group"],
                    selected: false
                }]
        })

        this.setState(responseOBJ);
    }

    hideWarnings() {
        this.setState({errorMessage: ""})
    }

    changeStageTo(stageNum) {
        this.setState({stage: stageNum})
    }

    updateSelectedDimensionOptions(dimension, option,) {

    }

    showDimensionOptionsFor(map) {
        this.setState({errorMessage: `Warning this functionality is not available in the POC ${map}`})
    }

    showDimensionFor(dimensionID) {
        this.setState({stage: 1, selectedDimensionID: dimensionID});

    }

    updateErrorMessage(errorMessage) {
        this.setState({errorMessage: errorMessage});
    }

    categoriesChanged(dimensionID, name) {
        let datasetDetails = this.state.datasetDetails;
        let datasetResults = datasetDetails.results;
        let dimensions = datasetResults.dimensions.slice();
        dimensions.forEach((dim) => {
            let dimID = dim.label || toTitleCase(dim.name)
            if (dimID === dimensionID) {
                let categories = dim.categories;
                categories.forEach((category) => {
                    category.selected = category.name === name;
                })
            }
        })
        datasetResults.dimensions = dimensions;
        this.setState({datasetDetails: datasetDetails});
    }

    render() {
        if (this.state.response == null || this.state.response.results == null) {
            return null;
        }
        let errorMessage = this.state.errorMessage;
        let searchString;
        return (<div className="page-container">
            <Header/>
            <div className={"content"}>
                <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                           performSearch={() => {
                           }}/>
                <div className={"wrapper"}>
                    <Breadcrumbs datasetID={this.props.match.params.name}
                                 datasetTheme={this.state.response.results.theme}
                                 updateErrorMessage={this.updateErrorMessage}/>
                    <DatasetLandingPageContent show={this.state.stage === 0}
                                               datasetID={this.props.match.params.name}
                                               updateErrorMessage={this.updateErrorMessage}
                                               selectedDimensionOptions={this.state.selectedDimensionOptions}
                                               showDimensionOptionsFor={this.showDimensionOptionsFor}
                                               showDimensionFor={this.showDimensionFor}
                                               updateSelectedDimensionOptions={this.updateSelectedDimensionOptions}
                                               results={this.state.response.results}
                                               datasetDetails={this.state.datasetDetails}
                                               categories={this.state.categories}
                    />
                    <DatasetLandingPageDimensionOptions show={this.state.stage === 1}
                                                        datasetID={this.props.match.params.name}
                                                        results={this.state.response.results}
                                                        datasetDetails={this.state.datasetDetails}
                                                        changeStageTo={this.changeStageTo}
                                                        categoriesChanged={this.categoriesChanged}
                                                        selectedDimensionID={this.state.selectedDimensionID}
                    />
                </div>
            </div>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>
        </div>)
    }
}
