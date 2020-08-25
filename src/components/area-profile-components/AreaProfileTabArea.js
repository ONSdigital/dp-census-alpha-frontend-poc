import React from 'react';
import '../../styles/App.css';
import {Tab} from "../Tab";
import {AreaProfileVisualisationTab} from "./tabs/AreaProfileVisualisationTab";
import {AreaProfileDatasetsTab} from "./tabs/AreaProfileDatasetsTab";

export class AreaProfileTabArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"activeTab": 0}
        this.changeTab = this.changeTab.bind(this);
    }

    //@formatter:off
    changeTab(name) {
        let tabIndex
        switch (name){
            case "Datasets": tabIndex = 0; break;
            case "Visualisations": tabIndex = 1; break;
            default: tabIndex = this.state.activeTab;
        }
        this.setState({"activeTab":tabIndex})
    }
    //@formatter:on

    render() {
        let totalDatasetResults = 0;
        let totalVisualisations = 0;
        if (this.props.datasetSearchResults != null){
            totalDatasetResults = this.props.datasetSearchResults.length;
        } else if (this.props.datasets != null && this.props.datasets.count != null) {
            totalDatasetResults = this.props.datasets.count
            if (this.props.visualisations != null && this.props.visualisations.count != null) {
                totalVisualisations = this.props.visualisations.count
            }
        }
        return <div>
            <div className={"tabbar in-page-tab-bar"}>
                <div className={"wrapper border-bottom"}>
                    <Tab count={totalDatasetResults} name={"Datasets"} active={this.state.activeTab === 0}
                         changeTab={this.changeTab} inPage={true}/>
                    <Tab count={totalVisualisations} name={"Visualisations"} active={this.state.activeTab === 1}
                         changeTab={this.changeTab} inPage={true}/>
                </div>
            </div>
            <div className={"wrapper"}>
                <AreaProfileDatasetsTab show={this.state.activeTab === 0}
                                        datasets={this.props.datasets}
                                        datasetSearchResults={this.props.datasetSearchResults}
                />
                <AreaProfileVisualisationTab show={this.state.activeTab === 1}
                                             visualisations={this.props.visualisations}
                />
            </div>
        </div>
    }
}
