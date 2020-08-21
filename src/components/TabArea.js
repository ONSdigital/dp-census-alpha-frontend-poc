import React from 'react';
import '../styles/App.css';
import {Tab} from "./Tab";
import {DataTab} from "./tabs/DataTab";
import {AreasTab} from "./tabs/AreasTab";
import {PublicationsTab} from "./tabs/PublicationsTab";

export class TabArea extends React.Component {

    constructor(props) {
        super(props);
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
        let areaProfiles=[]
        if (this.props.results != null && this.props.results.counts != null) {
            if (this.props.results.counts.datasets != null) {
                totalDataResults = this.props.results.counts.datasets;
            }
            if (this.props.results.counts.area_profiles != null) {
                totalAreaResults = this.props.results.counts.area_profiles;
            }
            if (this.props.results.counts.publications != null) {
                totalPublicationResults = this.props.results.counts.publications;
            }
            areaProfiles = this.props.results.area_profiles
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
                <DataTab show={this.state.activeTab === 0}
                         searchString={this.props.searchString}
                         totalResults={totalDataResults} pageNum={this.props.pageNum}
                         requestSearch={this.props.requestSearch}
                         results={this.props.results}
                         resultsPerPage={this.props.resultsPerPage}
                         getNextPage={this.props.getNextPage}
                         updateErrorMessage={this.props.updateErrorMessage}
                />
                <AreasTab show={this.state.activeTab === 1}
                          searchString={this.props.searchString}
                          totalResults={totalAreaResults} pageNum={this.props.pageNum}
                          areaProfiles={areaProfiles}
                          requestSearch={this.props.requestSearch}
                />
                <PublicationsTab show={this.state.activeTab === 2}/>
            </div>
        </div>
    }
}
