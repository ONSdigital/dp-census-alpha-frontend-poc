import React from 'react';
import '../../styles/App.css';
import {makeRequest} from "../../helpers/API";

/**
 * This whole tab is just a wire frame model and so likely will need to be all removed and done with actual designs.
 */

export class AreasTab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {groupedAreas: []}
    }

    // componentDidMount() {
    // }

    makeGroupAreaList() {
        let fullResults = null;
        let groupAreaList = this.props.groupedAreas.map((miniResult) => {
            let arrow = (miniResult.view === true) ?
                <b className={"font-size--18 float-left disclosure-arrow black-link margin-right--1"}>▼</b> :
                <b className={"font-size--18 line-height-md--26 float-left disclosure-arrow black-link margin-right--1"}>▶</b>;

            if (miniResult.view) {
                fullResults = this.props.allAreas.map((area) => {
                    if (area.hierarchy === miniResult.key) {
                        return (
                            <div key={area.id} className={"separator margin-left--2"}>
                                <a href={`/dp-census-alpha-frontend-poc/area-profile/${area.links.self.id}`}
                                   className={"black-link"}>
                                    <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--0 font-size--14"}>
                                        {area.hierarchy}
                                    </p>
                                    <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--1 font-size--18"}>
                                        <u>{area.name}</u>
                                    </p>
                                </a>
                            </div>)
                    } else {
                        return null;
                    }
                })
            }
            return (<div key={miniResult.key} className={"separator cursor-pointer"}>
                <div onClick={() => {
                    this.props.toggleFullList(miniResult.key);
                }}>
                    <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--0 font-size--14"}>
                        {miniResult.key}</p>
                    <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--1 font-size--18"}>
                        {arrow}<u>{miniResult.doc_count} entries</u>
                    </p>
                </div>
                {fullResults}
            </div>)
        })
        return groupAreaList
    }

    makeResultsList() {
        let areas = this.props.allAreas || this.props.areaProfiles.items
        if (areas == null) {
            return null;
        }
        let groupAreaList = this.makeGroupAreaList(); // This changes state during a state change and causes another render endless cycle
        let individualElementList = areas.map((item) => {
                let isGroupedItem = false
                this.props.groupedAreas.forEach((groupedArea) => {
                    if (groupedArea.key === item.hierarchy) {
                        isGroupedItem = true;
                    }
                })
                if (isGroupedItem) {
                    return null
                } else {
                    return (<div key={item.id} className={"separator"}>
                        <a href={`/dp-census-alpha-frontend-poc/area-profile/${item.links.self.id}`}
                           className={"black-link"}>
                            <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--0 font-size--14"}>
                                {item.hierarchy}
                            </p>
                            <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--1 font-size--18"}>
                                <u>{item.name}</u>
                            </p>
                        </a>
                    </div>)
                }

            }
        )
        return (<div>
            {individualElementList}
            {groupAreaList}
        </div>)
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        if (this.props.areaProfiles == null) {
            return null;
        }
        let resultsList = this.makeResultsList();
        return <div>
            <div className={"results-found margin-bottom--3"}>
                <span
                    className={"font-size--24"}>{this.props.totalResults} results for data containing <b>{this.props.searchString}</b></span>
            </div>
            {resultsList}
        </div>
    }
}
