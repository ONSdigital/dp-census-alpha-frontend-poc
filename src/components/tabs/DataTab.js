import React from 'react';
import '../../styles/App.css';
import {SortBox} from "../SortBox";
import {FilterMenu} from "../filter/FilterMenu";

export class DataTab extends React.Component {

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
                </div>
            </div>
        </div>
    }
}
