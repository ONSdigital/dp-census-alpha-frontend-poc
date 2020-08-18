import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Warning} from "../components/Warning";
import {DatasetLandingPageContent} from "../components/dataset-landing-page/DatasetLandingPageContent";
import {DatasetLandingPageDimensionOptions} from "../components/dataset-landing-page/DatasetLandingPageDimensionOptions";

export class DatasetLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedDimensionOptions: [], stage: 0};
        this.updateErrorMessage = this.updateErrorMessage.bind(this);
        this.showDimensionFor = this.showDimensionFor.bind(this);
        this.showDimensionOptionsFor = this.showDimensionOptionsFor.bind(this);
        this.updateSelectedDimensionOptions = this.updateSelectedDimensionOptions.bind(this);
        this.hideWarnings = this.hideWarnings.bind(this);
    }

    hideWarnings() {
        this.setState({errorMessage: ""})
    }

    updateSelectedDimensionOptions(dimension, option,) {

    }

    showDimensionOptionsFor(map) {
        this.setState({errorMessage: `Warning this is a 'CMD' dataset, which has no mappings for: ${map}`})
    }

    showDimensionFor(dimension) {
        console.log("got here")
        this.setState({stage: 1});

    }

    updateErrorMessage(errorMessage) {
        this.setState({errorMessage: errorMessage});
    }

    render() {
        let errorMessage = this.state.errorMessage;
        return (<div className="page-container">
            <Header/>
            <DatasetLandingPageContent show={this.state.stage === 0}
                                       datasetID={this.props.match.params.name}
                                       updateErrorMessage={this.updateErrorMessage}
                                       selectedDimensionOptions={this.state.selectedDimensionOptions}
                                       showDimensionOptionsFor={this.showDimensionOptionsFor}
                                       showDimensionFor={this.showDimensionFor}
                                       updateSelectedDimensionOptions={this.updateSelectedDimensionOptions}
            />
            <DatasetLandingPageDimensionOptions show={this.state.stage === 1}/>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>
        </div>)
    }
}
