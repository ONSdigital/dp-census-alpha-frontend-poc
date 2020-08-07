import React from 'react';
import '../../styles/App.css';

export class FilterDimensionMenu extends React.Component {

    constructor() {
        super();
        this.state = {"showDimensions": false};
        this.toggleDimensions = this.toggleDimensions.bind(this);
    }

    toggleDimensions() {
        this.setState({"showDimensions": !this.state.showDimensions})
    }

    makeListModel() {
        if (!this.state.showDimensions) {
            return null;
        }
        let refinementSelected = false;
        let dimensionOptions = this.props.dimensions.items.map((dim) => {
            if (dim.selected) {
                refinementSelected = true;
            }
            return <li
                className={"filters__item"}
                key={dim.name}
            >
                <div className="filters__field">
                    <input id={`checkbox-dimension-${dim.name}`}
                           className="js-auto-submit__input checkbox-dimensions"
                           type="radio"
                           name="filter-dimensions" value={dim.name}
                           checked={dim.selected}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value)
                           }}
                    />
                    <label htmlFor={`checkbox-dimension-${dim.name}`} className={"font-size--18"}>
                        {dim.label}
                    </label>
                </div>
            </li>
        })
        return (<ul className="list--neutral margin-top--0 margin-bottom--0">
            <li
                key={"all"}
                className={"filters__item"}>
                <div className="filters__field">
                    <input id={`checkbox-dimension-all`}
                           className="js-auto-submit__input checkbox-dimensions"
                           type="radio"
                           name="filter-dimensions" value={"All"}
                           checked={!refinementSelected}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value)
                           }}
                    />
                    <label htmlFor={`checkbox-dimension-all`} className={"font-size--18"}>
                        All dataset variables
                    </label>
                </div>
            </li>
            {dimensionOptions}
        </ul>);
    }

    render() {
        let dimensionsFilterList = this.makeListModel()

        return <div className={"filter-area-border"}>
            <fieldset className="filters__fieldset">
                <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                    this.toggleDimensions()
                }}><i className={this.state.showDimensions ? "up-arrow" : "down-arrow"}/><span>Dataset variables</span>
                </legend>
                <div className="js-checkbox-container">
                    {dimensionsFilterList}
                </div>
            </fieldset>
        </div>
    }
}
