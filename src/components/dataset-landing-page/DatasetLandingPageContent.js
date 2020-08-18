import {SearchBar} from "../header/SearchBar";
import React from "react";
import {makeRequest} from "../../helpers/API";
import {Breadcrumbs} from "../Breadcrumbs";
import {DimensionPreviewMenu} from "./DimensionPreviewMenu";
import {DatasetLandingPageInfo} from "./DatasetLandingPageInfo";

export class DatasetLandingPageContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.handleSearch();
        this.makeRandomColorForDisclosure();
    }

    makeRandomColorForDisclosure() {
        let randomMaxBlockedNum = this.randomIntBetween(1, 5000);
        let randomBlockedNum = this.randomIntBetween(0, randomMaxBlockedNum);
        let percentageBlocked = randomBlockedNum / randomMaxBlockedNum;
        let disclosureColour = 'rgb(' + this.getColourBetween([255, 0, 0], [0, 255, 0], percentageBlocked).join() + ')'
        this.setState({
            disclosureColour: disclosureColour,
            randomMaxBlockedNum: randomMaxBlockedNum,
            randomBlockedNum: randomBlockedNum,
        });
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

    toggleDisclosureInfo() {
        this.setState({disclosureControlInfoOpen: !this.state.disclosureControlInfoOpen})
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
                    return <p className={"font-size--18"}><a
                        href={relatedPublication.href}>{relatedPublication.title}</a></p>
                }
            })
            return relatedPublications
        } else {
            return null
        }
    }

    // TODO move to helper
    randomIntBetween(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // TODO move to helper
    getColourBetween(color1, color2, weight) {
        var p = weight;
        var w = p * 2 - 1;
        var w1 = (w / 1 + 1) / 2;
        var w2 = 1 - w1;
        var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
            Math.round(color1[1] * w1 + color2[1] * w2),
            Math.round(color1[2] * w1 + color2[2] * w2)];
        return rgb;
    }

    // TODO move to helper
    bytesToSize(bytes) {
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) {
            return '0 Byte';
        }
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    makeLandingPageInfo() {
        if(!this.props.show){
            return null;
        }
        let relatedDatasets = this.makeRelatedDatasets();
        let relatedPublications = this.makeRelatedPublications();
        let disclosureControlArrow = this.state.disclosureControlInfoOpen ?
            <b className={"font-size--18 float-left disclosure-arrow"} onClick={() => {
                this.toggleDisclosureInfo();
            }}>▼</b> :
            <b className={"font-size--18 line-height-md--26 float-left disclosure-arrow"} onClick={() => {
                this.toggleDisclosureInfo();
                this.toggleDisclosureInfo();
            }}>▶</b>;
        let disclosureControlInfo = this.state.disclosureControlInfoOpen ? (
            <p className={"disclosure-paragraph font-size--18"}>Census data provides great details, while
                protecting the confidentiality of the individual.
                <b> Statistical disclosure control </b>
                has been applied to 2021 Census data to protect the attributes of an
                individual.<br/><br/>
                ONS has used two complementary strategies for protecting individuals while minimising damage
                to
                the results:
                <ul>
                    <li className={"font-size--18 margin-top--0 margin-bottom--0 padding-top--0 padding-bottom--0"}>target
                        record swapping, and
                    </li>
                    <li className={"font-size--18 margin-top--0 margin-bottom--0 padding-top--0 padding-bottom--0"}>restriction
                        of detail particularly at low level geographies
                    </li>
                </ul>
                To improve the outputs you can either change the area type to a higher level.<br/><br/>
                <i>For example. Output Area to Lower Layer Super Output area.</i><br/><br/>
                Alternatively choose a variable and reduce the number of categories in that
                variable. <br/><br/>
                <i>For example, Age: 19 categories to 8 categories</i>

            </p>) : null
        let csvDownloadLink = "#"
        let downloadSize = "35 MB"
        if (this.state.datasetDetails.results != null && this.state.datasetDetails.results.downloads != null && this.state.datasetDetails.results.downloads.csv) {
            csvDownloadLink = this.state.datasetDetails.results.downloads.csv.href;
            downloadSize = this.bytesToSize(this.state.datasetDetails.results.downloads.csv.size);
        }
        return (
            <div>
                <div className={"col--md-39 dataset-landing-main"}>
                    <div className={"margin-bottom--5"}>
                        <div
                            className={"disclosure-control-box margin-top--4 padding-top--3 padding-right--1 padding-bottom--3 padding-left--1"}
                            style={{"border-color": this.state.disclosureColour}}>
                            <b className={"font-size--24"}>{this.state.randomBlockedNum} out
                                of {this.state.randomMaxBlockedNum} areas were
                                blocked by Statistical Disclosure
                                Control rules</b>
                        </div>
                        <p>{disclosureControlArrow}
                            <a
                                className={"disclosure-accordion font-size--18 float-left col--md-35 padding-left--1"}
                                onClick={() => {
                                    this.toggleDisclosureInfo()
                                }}><u>What is Statistical
                                Data Disclosure and tips on
                                how to improve the outputs</u>
                            </a>
                        </p>
                        {disclosureControlInfo}
                    </div>
                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0 margin-top--8"}>Dataset</p>
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
                    <DimensionPreviewMenu datasetDetails={this.state.datasetDetails.results}
                                          selectedDimensionOptions={this.props.selectedDimensionOptions}
                                          showDimensionFor={this.props.showDimensionFor}
                                          showDimensionOptionsFor={this.props.showDimensionOptionsFor}
                    />
                    <a className={"font-size--18"} href={"#"}><u>Add variable</u></a>
                    <p className={"font-size--18 margin-top--4"}><b>Download dataset</b></p>
                    <form method="get" action={csvDownloadLink}>
                        <input type="submit" value={` xls (${downloadSize})`} aria-label="download the data"
                               className="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                               name="download the data"
                        />
                    </form>
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
        )
    }

    render() {
        let searchString;
        if (this.state.response == null || this.state.response.results == null || this.state.datasetDetails == null) {
            return null;
        }
        let landingPageInfo = this.makeLandingPageInfo();
        return (<div className="content">
            <SearchBar searchString={searchString} shouldRedirectToSearch={true}
                       performSearch={() => {
                       }}/>
            <div className={"wrapper"}>
                <Breadcrumbs datasetID={this.props.datasetID} datasetTheme={this.state.response.results.theme}
                             updateErrorMessage={this.props.updateErrorMessage}/>
                {landingPageInfo}

            </div>
        </div>)
    }
}



