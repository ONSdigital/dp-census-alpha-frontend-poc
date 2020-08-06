import React from 'react';
import '../../styles/App.css';
import {SortBox} from "../SortBox";
import {FilterMenu} from "../filter/FilterMenu";
import {Results} from "../Results";
import {SelectedSearchFilters} from "../filter/SelectedSearchFilters";

export class DataTab extends React.Component {

    constructor() {
        super();
        this.removeFilter = this.removeFilter.bind(this);
        this.state = {
            filter: [
                {name: "People, population and community", value: "peoplepopulationandcommunity"},
                {name: "Cultural identity", value: "cultrualidentity"},
                {name: "Ethnicity", value: "ethnicity"}]
        }

    }

    removeFilter(value) {

    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return <div className={"results-found"}>
            <div>
                <span
                    className={"font-size--24"}>{this.props.totalResults} results for data containing <b>{this.props.searchString}</b></span>
                <SortBox/>
                <div className={"padding-top--4"}>
                    <FilterMenu/>
                    <SelectedSearchFilters
                        filters={this.state.filter}
                        removeFilter={(value) => {
                            this.removeFilter(value)
                        }}/>
                    <Results/>
                </div>
            </div>
        </div>
    }
}
