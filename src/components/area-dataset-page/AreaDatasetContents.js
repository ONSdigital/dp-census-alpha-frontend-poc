import React from 'react';
import '../../styles/App.css';

export class AreaDatasetContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    makeLandingPageInfo() {
        return (
            <div>
                <div className={""}>

                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0 margin-top--3"}>Dataset</p>
                    <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
                        <b>{this.props.results.title}</b></h1>
                    <div className={"dataset-landing-main col--md-30"}>
                        <p className={"font-size--18"}><b>About this dataset</b></p>
                        <p className={"font-size--18"}>{this.props.results.description}</p>
                        <form method="get" action={() => {
                        }}>
                            <p className={"font-size--18"}><b>Get the data</b></p>
                            <a aria-label="download the data"
                               className="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                               href={`/dp-census-alpha-frontend-poc/area-type/${this.props.datasetID}`}
                            >Filter and download</a>
                        </form>
                    </div>
                </div>
                <div className={"grey-area col--md-25 float-right padding-left--1"}>
                    <p className={"font-size--18 margin-bottom--1 padding-bottom--0"}><b>Contact details for this
                        dataset</b></p>
                    <p className={"font-size--18"}>{this.props.results.contacts[0].name}<br/>
                        <a href={`mailto:${this.props.results.contacts[0].email}`}>{this.props.results.contacts[0].email}</a><br/>
                        <a href={`tel:${this.props.results.contacts[0].telephone}`}>{this.props.results.contacts[0].telephone}</a><br/>
                    </p>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.results == null) {
            return null;
        }
        let landingPageInfo = this.makeLandingPageInfo();
        return (<div>
            {landingPageInfo}
        </div>)
    }
}
