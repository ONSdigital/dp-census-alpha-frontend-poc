import {SearchBar} from "../header/SearchBar";
import React from "react";
import {makeRequest} from "../../helpers/API";
import {Breadcrumbs} from "../Breadcrumbs";

export class DatasetLandingPageContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = async () => {
        await this.submitForm();
    }

    async submitForm() {
        // TODO change API request
        let datasetID = this.props.datasetID
        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`https://api.beta.ons.gov.uk/v1/datasets/${datasetID}`, `GET`);
        this.setState(responseOBJ);
    }

    render() {
        let searchString;
        if (this.state.response == null || this.state.response.results == null) {
            return null;
        }
        return (<div className="content">
            <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                       performSearch={() => {
                       }}/>
            <div className={"wrapper"}>
                <Breadcrumbs datasetID={this.props.datasetID} datasetTheme={this.state.response.results.theme}
                             updateErrorMessage={this.props.updateErrorMessage}/>
                <div className={"col--md-40"}>
                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0"}>Dataset</p>
                    <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}><b>{this.state.response.results.title}</b></h1>
                    <p className={"font-size--18"}><b>Overview</b></p>
                    <p className={"font-size--18"}>Released: [dd Month yyyy]</p>
                    <p className={"font-size--18"}>{this.state.response.results.description}</p>
                    <p className={"font-size--18"}><b>Contact details for this dataset</b></p>
                    <p className={"font-size--18"}>{this.state.response.results.contacts[0].name}<br/>
                        {this.state.response.results.contacts[0].email}<br/>
                        {this.state.response.results.contacts[0].telephone}</p>
                    <p className={"font-size--18"}><b>Variables used within the dataset</b></p>
                    <p className={"font-size--18"}>You can change the variables however it is important to note that the ONS uses Statistical
                        Disclosure Controls to protect the attributes of an individual and their data and so some
                        details might be restricted.</p>
                    <p className={"font-size--18"}><b>Download dataset</b></p>
                    <input type="button" value=" xls (35.0 KB)" aria-label="download the data"
                           className="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                           name="download the data"/>
                </div>
            </div>
        </div>)
    }
}



