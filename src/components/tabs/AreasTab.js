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

    componentDidMount() {
        this.getAllAreas();
    }

    getAllAreas = async () => {
        await this.fetchAllAreas();
    }

    async fetchAllAreas() {
        let searchString = this.props.searchString;
        let responseOBJ
        responseOBJ = await makeRequest(`http://99.80.8.15:10300/search?q=${searchString}&limit=500&offset=0`, `GET`);
        let allAreas = responseOBJ.results.area_profiles.items;
        this.setState({allAreas: allAreas}, () => {
            this.makeGroupAreaList();
        });
    }

    toggleFullList(key) {

    }

    makeGroupAreaList() {
        let groupedAreas = [];
        if (this.props.areaProfiles != null && this.props.areaProfiles.aggregations != null && this.props.areaProfiles.aggregations.hierarchies != null) {
            this.props.areaProfiles.aggregations.hierarchies.buckets.forEach((areaBucket) => {
                if (areaBucket.doc_count > 1) {
                    areaBucket.view = false;
                    groupedAreas.push(areaBucket);
                }
            })
        }
        let groupAreaList = groupedAreas.map((miniResult) => {
            let arrow = (miniResult.view === true) ?
                <b className={"font-size--18 float-left disclosure-arrow black-link margin-right--1"}>▼</b> :
                <b className={"font-size--18 line-height-md--26 float-left disclosure-arrow black-link margin-right--1"}>▶</b>;
            return (<div key={miniResult.key} className={"separator cursor-pointer"} onClick={() => {
                this.toggleFullList(miniResult.key);
            }}>
                <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--0 font-size--14"}>
                    {miniResult.key}</p>
                <p className={"margin-top--0 margin-bottom--0 padding-top--1 padding-bottom--1 font-size--18"}>
                    {arrow}<u>{miniResult.doc_count} entries</u>
                </p>
            </div>)
        })
        this.setState({
            groupAreaList: groupAreaList,
            groupedAreas: groupedAreas
        })
    }

    makeResultsList() {
        let areas = this.state.allAreas || this.props.areaProfiles.items
        if (areas == null) {
            return null;
        }
        let individualElementList = areas.map((item) => {
                let isGroupedItem = false
                this.state.groupedAreas.forEach((groupedArea) => {
                    if (groupedArea.key === item.hierarchy) {
                        isGroupedItem = true;
                    }
                })
                if (isGroupedItem) {
                    return null
                } else {
                    return (<div key={item.id} className={"separator"}>
                        <a href={`/dp-census-alpha-frontend-poc/area-profile/${item.links.self.id}`} className={"black-link"}>
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
            {this.state.groupAreaList}
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
