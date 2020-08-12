import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Warning} from "../components/Warning";
import {DatasetLandingPageContent} from "../components/dataset-landing-page/DatasetLandingPageContent";

export class DatasetLandingPage extends React.Component {


    constructor(props) {
        super(props);
        this.state={};
        this.updateErrorMessage = this.updateErrorMessage.bind(this);
    }
    updateErrorMessage(errorMessage) {
        this.setState({errorMessage: errorMessage});
    }

    render() {
        let errorMessage = this.state.errorMessage;
        return (<div className="page-container">
            <Header/>
            <DatasetLandingPageContent datasetID={this.props.match.params.name} updateErrorMessage={this.updateErrorMessage}/>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>
        </div>)
    }
}
