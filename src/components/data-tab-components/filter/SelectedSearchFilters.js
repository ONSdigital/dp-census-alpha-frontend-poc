import React from 'react';
import '../../../styles/App.css';

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
        } else if (type === "geography") {
            return <span className={"font-size--22"}><button className={"font-size--18"} onClick={() => {
                this.props.removeGeographyDimension(value)
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

    createSelectedGeography() {
        if (this.props.filterGeographies.length < 1) {
            return null;
        }
        let geoSelected = false;
        let listOfSelectedGeography = this.props.filterGeographies.items.map((filter, index) => {
            if (filter.selected) {
                geoSelected = true;
                return <span>{this.removableItem(filter.hierarchy, filter.filterable_hierarchy, false, "geography")}</span>
            } else {
                return null;
            }
        });
        if (geoSelected) {
            return <div className={"padding-left--1 padding-top--1 padding-bottom--1"}>
                <b>Availability</b> {listOfSelectedGeography}
            </div>
        } else {
            return null;
        }

    }

    render() {
        if (this.props.filterGeographies == null || this.props.filterDimensions == null || this.props.filterTopics == null) {
            return null
        }
        let aFilterOn = false;
        this.props.filterGeographies.items.forEach((filter) => {
            if (filter.selected) {
                aFilterOn = true;
            }
        })
        this.props.filterDimensions.forEach((filter) => {
            if (filter.selected) {
                aFilterOn = true;
            }
        })
        if (this.props.filterTopics.length > 0) {
            aFilterOn = true;
        }
        if (!aFilterOn) {
            return null;
        }
        let selectedTopics = this.createSelectedTopics();
        let selectedDimensions = this.createSelectedDimensions();
        let selectedGeography = this.createSelectedGeography();
        let lineBreak1 = null;
        let lineBreak2 = null;
        if (selectedTopics != null && (selectedDimensions != null || selectedGeography != null)) {
            lineBreak1 = <div className={"selection-line"}></div>
        }
        if (selectedDimensions != null && selectedGeography != null) {
            lineBreak2 = <div className={"selection-line"}></div>
        }
        //TODO visual lines between all categories
        return (
            <div className={"selected-filter-panel font-size--18"}>
                {selectedTopics}
                {lineBreak1}
                {selectedDimensions}
                {lineBreak2}
                {selectedGeography}

            </div>

        )
    }
}


