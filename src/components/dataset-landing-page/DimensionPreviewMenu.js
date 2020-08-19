import React from 'react';
import '../../styles/App.css';
import {toTitleCase} from "../../helpers/Text";

export class DimensionPreviewMenu extends React.Component {
    static defaultProps = {dimensionOptions:{}}
    constructor(props) {
        super(props);

        this.state = {
            selectedDimensions: []
        }
    }

    makeDimensionRow(label, name, selectedCategory) {
        let id = label || toTitleCase(name);
        return (<div className={"col margin-left--0 padding-left--1 dimension-selection-area-block-group"}>
            <div className={"dimension-selection-area-block font-size--18"}><b>{id}</b>
            </div>
            <div className={"dimension-selection-area-block font-size--18"}>{selectedCategory || 'Nothing selected'}</div>
            <div className={"dimension-selection-area-block font-size--18"}>
                <input className="preview-download-change font-size--18" type="button" value="Change"
                       name="filter"
                       onClick={() => {
                           this.props.showDimensionFor(id);
                       }}
                />
                <input className="preview-download-change font-size--18" type="button" value="Add"
                       name="filter"
                       onClick={() => {
                           this.props.showDimensionOptionsFor(id);
                       }}
                />
            </div>
        </div>)
    }

    makeDimensionsArea() {
        // for each dimension option make an array of makeDimensionRow

        let dimensionRow = [];
        this.props.datasetDetails.dimensions.forEach((dimension) => {
            let selectedCategory = "Nothing to show"

            if (dimension.categories != null){
                dimension.categories.forEach((category) => {
                    if (category.selected) {
                        selectedCategory = category.contains.join(" · ");
                    }
                })
            }
            dimensionRow.push(this.makeDimensionRow(dimension.label, dimension.name, selectedCategory))
        })
        return (<div>{dimensionRow}</div>)
    }

    render() {
        if (this.props.datasetDetails == null) {
            return null;
        }
        let dimensionArea = this.makeDimensionsArea();
        return <div>
            {dimensionArea}
        </div>
    }
}
