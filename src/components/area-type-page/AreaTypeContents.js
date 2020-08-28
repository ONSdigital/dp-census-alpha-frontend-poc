import React from 'react';
import '../../styles/App.css';

export class AreaTypeContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {selected: "Local authority"};
    }

    checkChanged(value) {
        this.setState({selected: value})
    }

    makeLandingPageInfo() {
        return (
            <div>
                <div className={""}>

                    <p className={"font-size--18 padding-bottom--0 margin-bottom--0 margin-top--3"}>Dataset</p>
                    <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
                        <b>{this.props.datasetName}</b></h1>
                    <div className="filters__field">
                        <div className={"display-block border-all-around col--md-25 padding-left--1 padding-top--1 padding-bottom--1 margin-bottom--2"}>
                            <input id={`radio-geography-local`}
                                   className="js-auto-submit__input radio-geography vertical-align-top"
                                   type="radio"
                                   name="filter-geography" value={"Local authority"}
                                   checked={this.state.selected === "Local authority"}
                                   onChange={(e) => {
                                       this.checkChanged(e.target.value);
                                   }}
                            />
                            <label htmlFor={`radio-geography-local`} className={"font-size--18"}>
                                {"Local authority"}
                            </label>
                        </div>
                        <div className={"display-block border-all-around col--md-25 padding-left--1 padding-top--1 padding-bottom--1 margin-bottom--2"}>
                            <input id={`radio-geography-middle`}
                                   className="js-auto-submit__input radio-geography vertical-align-top"
                                   type="radio"
                                   name="filter-geography" value={"Middle Layer Super Output Area"}
                                   checked={this.state.selected === "Middle Layer Super Output Area"}
                                   onChange={(e) => {
                                       this.checkChanged(e.target.value);
                                   }}
                            />
                            <label htmlFor={`radio-geography-middle`} className={"font-size--18"}>
                                {"Middle Layer Super Output Area"}
                            </label>
                        </div>
                        <div className={"display-block border-all-around col--md-25 padding-left--1 padding-top--1 padding-bottom--1 margin-bottom--2"}>
                            <input id={`radio-geography-lower`}
                                   className="js-auto-submit__input radio-geography vertical-align-top"
                                   type="radio"
                                   name="filter-geography" value={"Lower Layer Super Output Area"}
                                   checked={this.state.selected === "Lower Layer Super Output Area"}
                                   onChange={(e) => {
                                       this.checkChanged(e.target.value);
                                   }}
                            />
                            <label htmlFor={`radio-geography-lower`} className={"font-size--18"}>
                                {"Lower Layer Super Output Area"}
                            </label>
                        </div>
                        <div className={"display-block border-all-around col--md-25 padding-left--1 padding-top--1 padding-bottom--1 margin-bottom--2"}>
                            <input id={`radio-geography-output`}
                                   className="js-auto-submit__input radio-geography vertical-align-top"
                                   type="radio"
                                   name="filter-geography" value={"Output Area"}
                                   checked={this.state.selected === "Output Area"}
                                   onChange={(e) => {
                                       this.checkChanged(e.target.value);
                                   }}
                            />
                            <label htmlFor={`radio-geography-output`} className={"font-size--18"}>
                                {"Output Area"}
                            </label>
                        </div>
                    </div>
                    <div className={"dataset-landing-main col--md-25"}>
                        <form method="get" action={() => {
                        }}>
                            <a aria-label="download the data"
                               className="btn btn--primary btn--thick btn--big btn--focus margin-right--2 font-weight-700 font-size--17 margin-top--4"
                               href={`/dp-census-alpha-frontend-poc/dataset-landing/${this.props.datasetID}`}
                            >Continue</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let landingPageInfo = this.makeLandingPageInfo();
        return (<div>
            {landingPageInfo}
        </div>)
    }
}
