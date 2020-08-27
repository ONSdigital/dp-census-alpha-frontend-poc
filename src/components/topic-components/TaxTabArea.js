import React from 'react';
import '../../styles/App.css';
import {Tab} from "../Tab";
import {AreaProfileDatasetsTab} from "../area-profile-components/tabs/AreaProfileDatasetsTab";
import {AreaProfileVisualisationTab} from "../area-profile-components/tabs/AreaProfileVisualisationTab";
// import {Tab} from "./Tab";
// import {DataTab} from "./tabs/DataTab";
// import {AreasTab} from "./tabs/AreasTab";
import {TaxDatasetsTab} from "./tabs/TaxDatasetsTab";
import {TaxPublicationsTab} from "./tabs/TaxPublicationsTab";

export class TaxTabArea extends React.Component {

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
            case "Publications": tabIndex = 1; break;
            default: tabIndex = this.state.activeTab;
        }
        this.setState({"activeTab":tabIndex})
    }
    //@formatter:on

    render() {
        if(this.props.datasets == null){
            return null
        }
        let totalDatasetResults = 0;
        let totalPublicationResults = 0;
        if (this.props.datasets != null && this.props.datasets.count != null) {
            totalDatasetResults = this.props.datasets.count
        }
        return (
            <div>
                <div className={"tabbar in-page-tab-bar"}>
                    <div className={"wrapper border-bottom"}>
                        <Tab count={totalDatasetResults} name={"Datasets"} active={this.state.activeTab === 0}
                             changeTab={this.changeTab} inPage={true}/>
                        <Tab count={totalPublicationResults} name={"Publications"} active={this.state.activeTab === 1}
                             changeTab={this.changeTab} inPage={true}/>
                    </div>
                </div>
                <div className={"wrapper"}>
                    <TaxDatasetsTab show={this.state.activeTab === 0}
                                            datasets={this.props.datasets}
                    />
                    <TaxPublicationsTab show={this.state.activeTab === 1}
                                                 publications={null}
                    />
                </div>
            </div>)
    }
}
