import {SearchBar} from "../header/SearchBar";
import React from "react";
import {makeRequest} from "../../helpers/API";
import {Breadcrumbs} from "../Breadcrumbs";
import {DimensionPreviewMenu} from "./DimensionPreviewMenu";
import {DatasetLandingPageInfo} from "./DatasetLandingPageInfo";
import * as MathHelpers from "../../helpers/Mathamatics";
import {getColourBetween} from "../../helpers/Colors";

export class DatasetLandingPageContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.makeRandomColorForDisclosure();
    }

    makeRandomColorForDisclosure() {
        let randomMaxBlockedNum = MathHelpers.randomIntBetween(1, 5000);
        let shouldBlock = (MathHelpers.randomIntBetween(0, 2) != 0);
        let randomBlockedNum = 0;
        if (shouldBlock) {
            randomBlockedNum = MathHelpers.randomIntBetween(0, randomMaxBlockedNum);
        }
        let percentageBlocked = randomBlockedNum / randomMaxBlockedNum;
        let disclosureColour = 'rgb(' + getColourBetween([255, 0, 0], [0, 255, 0], percentageBlocked).join() + ')'
        this.setState({
            disclosureColour: disclosureColour,
            randomMaxBlockedNum: randomMaxBlockedNum,
            randomBlockedNum: randomBlockedNum,
        });
    }

    toggleDisclosureInfo() {
        this.setState({disclosureControlInfoOpen: !this.state.disclosureControlInfoOpen})
    }

    makeRelatedDatasets() {
        let relatedDatasets;

        if (this.props.results.related_datasets != null) {
            relatedDatasets = this.props.results.related_datasets.map((relatedDataset, index) => {
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
        if (this.props.results.publications != null) {
            relatedPublications = this.props.results.publications.map((relatedPublication, index) => {
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
    
    makeLandingPageInfo() {
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
        let disclosureControlSection = null;
        if (this.state.randomBlockedNum != 0) {
            disclosureControlSection = <div className={"margin-bottom--8"}>
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
        }
        let csvDownloadLink = "#"
        let downloadSize = "35 MB"
        if (this.props.datasetDetails.results != null && this.props.datasetDetails.results.downloads != null && this.props.datasetDetails.results.downloads.csv) {
            csvDownloadLink = this.props.datasetDetails.results.downloads.csv.href;
            downloadSize = MathHelpers.bytesToSize(this.props.datasetDetails.results.downloads.csv.size);
        }
        return (
            <div>
                <div className={"col--md-39 dataset-landing-main"}>
                    {disclosureControlSection}
                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0 margin-top--3"}>Dataset</p>
                    <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
                        <b>{this.props.results.title}</b></h1>
                    <p className={"font-size--18"}><b>Overview</b></p>
                    <p className={"font-size--18"}>Released: [dd Month yyyy]</p>
                    <p className={"font-size--18"}>{this.props.results.description}</p>
                    <p className={"font-size--18"}><b>Contact details for this dataset</b></p>
                    <p className={"font-size--18"}>{this.props.results.contacts[0].name}<br/>
                        <a href={`mailto:${this.props.results.contacts[0].email}`}>{this.props.results.contacts[0].email}</a><br/>
                        <a href={`tel:${this.props.results.contacts[0].telephone}`}>{this.props.results.contacts[0].telephone}</a><br/>
                    </p>
                    <p className={"font-size--18"}><b>Variables used within the dataset</b></p>
                    <p className={"font-size--18"}>You can change the variables however it is important to note that the
                        ONS uses Statistical
                        Disclosure Controls to protect the attributes of an individual and their data and so some
                        details might be restricted.</p>
                    <DimensionPreviewMenu datasetDetails={this.props.datasetDetails.results}
                                          categories={this.props.categories}
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
        if (!this.props.show) {
            return null;
        } else if (this.props.results == null || this.props.datasetDetails == null) {
            return null;
        }
        let landingPageInfo = this.makeLandingPageInfo();
        return (<div>
            {landingPageInfo}
        </div>)
    }
}



