import React from 'react';
import '../styles/App.css';
import {Tab} from "./Tab";
import {DataTab} from "./tabs/DataTab";
import {AreasTab} from "./tabs/AreasTab";
import {PublicationsTab} from "./tabs/PublicationsTab";

export class TabArea extends React.Component {

    constructor() {
        super();
        this.state = {"activeTab": 0}
        this.changeTab = this.changeTab.bind(this);
    }

    //@formatter:off
    changeTab(name) {
        let tabIndex
        switch (name){
            case "Data": tabIndex = 0; break;
            case "Areas": tabIndex = 1; break;
            case "Publications": tabIndex = 2; break;
            default: tabIndex = this.state.activeTab;
        }
        this.setState({"activeTab":tabIndex})
    }
    //@formatter:on

    render() {
        let totalDataResults = 0;
        let totalAreaResults = 0;
        let totalPublicationResults = 0;
        if (this.state.results != null && this.state.results.counts != null) {
            if (this.state.results.counts.datasets != null) {
                totalDataResults = this.state.results.counts.datasets;
            }
            if (this.state.results.counts.area_profiles != null) {
                totalAreaResults = this.state.results.counts.area_profiles;
            }
            if (this.state.results.counts.publications != null) {
                totalPublicationResults = this.state.results.counts.publications;
            }
        }
        return <div>
            <div className={"tabbar"}>
                <div className={"wrapper"}>
                    <Tab count={totalDataResults} name={"Data"} active={this.state.activeTab === 0}
                         changeTab={this.changeTab}/>
                    <Tab count={totalAreaResults} name={"Areas"} active={this.state.activeTab === 1}
                         changeTab={this.changeTab}/>
                    <Tab count={totalPublicationResults} name={"Publications"}
                         active={this.state.activeTab === 2}
                         changeTab={this.changeTab}/>
                </div>
            </div>
            <div className={"wrapper"}>
                <DataTab show={this.state.activeTab === 0} searchString={this.props.searchString}
                         totalResults={totalDataResults}/>
                <AreasTab show={this.state.activeTab === 1}/>
                <PublicationsTab show={this.state.activeTab === 2}/>
            </div>
        </div>
    }
}
