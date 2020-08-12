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
        await this.getDatasetInfo();
    }

    async getDatasetInfo() {
        let datasetID = this.props.datasetID
        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`https://api.beta.ons.gov.uk/v1/datasets/${datasetID}`, `GET`);
        this.setState(responseOBJ, async () => {
            await this.getVersionInfo(this.state.response.results.links.latest_version.href)
        });
    }

    async getVersionInfo(url) {
        let responseOBJ = {};
        responseOBJ.datasetDetails = await makeRequest(url, `GET`);
        this.setState(responseOBJ);
    }

    makeRelatedDatasets() {
        let relatedDatasets;

        if (this.state.response.results.related_datasets != null) {
            relatedDatasets = this.state.response.results.related_datasets.map((relatedDataset, index) => {
                if (index === 3) {
                    return <p className={"font-size--18"}><a href="#">See more related datasets</a></p>
                } else if (index > 2) {
                    return null;
                } else {
                    return <p className={"font-size--18"}><a href={relatedDataset.href}>{relatedDataset.title}</a></p>
                }
            })
            return relatedDatasets
        } else {
            return null
        }
    }

    makeRelatedPublications() {
        let relatedPublications;
        if (this.state.response.results.publications != null) {
            relatedPublications = this.state.response.results.publications.map((relatedPublication, index) => {
                if (index === 3) {
                    return <p className={"font-size--18"}><a href="#">See more related datasets</a></p>
                } else if (index > 2) {
                    return null;
                } else {
                    return <p className={"font-size--18"}><a href={relatedPublication.href}>{relatedPublication.title}</a></p>
                }
            })
            return relatedPublications
        } else {
            return null
        }
    }

    render() {
        let searchString;
        if (this.state.response == null || this.state.response.results == null) {
            return null;
        }
        let relatedDatasets = this.makeRelatedDatasets();
        let relatedPublications = this.makeRelatedPublications();
        return (<div className="content">
            <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                       performSearch={() => {
                       }}/>
            <div className={"wrapper"}>
                <Breadcrumbs datasetID={this.props.datasetID} datasetTheme={this.state.response.results.theme}
                             updateErrorMessage={this.props.updateErrorMessage}/>
                <div className={"col--md-40 dataset-landing-main"}>
                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0"}>Dataset</p>
                    <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
                        <b>{this.state.response.results.title}</b></h1>
                    <p className={"font-size--18"}><b>Overview</b></p>
                    <p className={"font-size--18"}>Released: [dd Month yyyy]</p>
                    <p className={"font-size--18"}>{this.state.response.results.description}</p>
                    <p className={"font-size--18"}><b>Contact details for this dataset</b></p>
                    <p className={"font-size--18"}>{this.state.response.results.contacts[0].name}<br/>
                        <a href={`mailto:${this.state.response.results.contacts[0].email}`}>{this.state.response.results.contacts[0].email}</a><br/>
                        <a href={`tel:${this.state.response.results.contacts[0].telephone}`}>{this.state.response.results.contacts[0].telephone}</a><br/>
                    </p>
                    <p className={"font-size--18"}><b>Variables used within the dataset</b></p>
                    <p className={"font-size--18"}>You can change the variables however it is important to note that the
                        ONS uses Statistical
                        Disclosure Controls to protect the attributes of an individual and their data and so some
                        details might be restricted.</p>
                    <p className={"font-size--18"}><b>Download dataset</b></p>
                    <input type="button" value=" xls (35.0 KB)" aria-label="download the data"
                           className="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                           name="download the data"/>
                </div>
                <div className={"dataset-landing-related-section col--md-19"}>
                    <div className={"dataset-landing-related-datasets-section"}>
                        <p className={"font-size--18"}><b>Related Datasets</b></p>
                        <div>{relatedDatasets}</div>
                    </div>
                <div className={"dataset-landing-related-publications-section"}>
                    <p className={"font-size--18"}><b> Publications that use this dataset</b></p>
                    {relatedPublications}
                </div>

                </div>
            </div>
        </div>)
    }
}



