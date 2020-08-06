import React from 'react';
import '../../styles/App.css';

export class SelectedSearchFilters extends React.Component {


    removableItem(name, value, isLast) {
        return <span className={"font-size--22"}><button className={"font-size--18"} onClick={() => {
            this.props.removeFilter(value)
        }}><b className={"font-size--22"}>✕ </b> {name}</button><b
            className={"font-size--22"}> {isLast ? "" : "and"} </b></span>
    }

    render() {
        let selectedFilters = this.props.filters.map((filter, index) => {
            let isLast = (this.props.filters.length - 1 === index)
            return <span>{this.removableItem(filter.name, filter.value, isLast)}</span>
        })
        return (
            <div className={"selected-filter-panel font-size--18"}>
                <div className={"padding-left--1 padding-top--1 padding-bottom--1"}><b>In</b> {selectedFilters}</div>
            </div>
        )
    }
}


