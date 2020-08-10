import React from 'react';
import '../../styles/App.css';

export class SelectedSearchFilters extends React.Component {


    removableItem(name, value, isLast, type) {
        if (type === "topic") {
            return <span className={"font-size--22"}><button className={"font-size--18"} onClick={() => {
                this.props.removeFilterTopic(value)
            }}><b className={"font-size--22"}>✕ </b> {name}</button><b
                className={"font-size--22"}> {isLast ? "" : "and"} </b></span>
        } else if (type === "dimension") {
            return <span className={"font-size--22"}><button className={"font-size--18"} onClick={() => {
                this.props.removeFilterDimension(value)
            }}><b className={"font-size--22"}>✕ </b> {name}</button></span>
        } else {
            return null
        }
    }

    createSelectedTopics() {
        if (this.props.filterTopics.length < 1) {
            return null;
        }
        let listOfFilters = this.props.filterTopics.map((filter, index) => {
            let isLast = (this.props.filterTopics.length - 1 === index)
            return <span>{this.removableItem(filter.name, filter.value, isLast, "topic")}</span>
        })
        return <div className={"padding-left--1 padding-top--1 padding-bottom--1"}><b>In</b> {listOfFilters}</div>
    }

    createSelectedDimensions() {
        if (this.props.filterDimensions.length < 1) {
            return null;
        }
        let somethingSelected = false;
        this.props.filterDimensions.forEach((dim) => {
            if (dim.selected) {
                somethingSelected = true;
            }
        });
        if (somethingSelected === false) {
            return null;
        }
        let listOfSelectedDimensions = this.props.filterDimensions.map((filter, index) => {
            if (filter.selected) {
                return <span>{this.removableItem(filter.label, filter.name, false, "dimension")}</span>
            } else {
                return null;
            }
        })
        return <div className={"padding-left--1 padding-top--1 padding-bottom--1"}>
            <b>Contains</b> {listOfSelectedDimensions}
        </div>
    }

    render() {
        if (this.props.filterTopics.length < 1 && this.props.filterDimensions.length < 1) {
            return null;
        }
        let selectedTopics = this.createSelectedTopics();
        let selectedDimensions = this.createSelectedDimensions();
        return (
            <div className={"selected-filter-panel font-size--18"}>
                {selectedTopics}
                {selectedDimensions}

            </div>

        )
    }
}


