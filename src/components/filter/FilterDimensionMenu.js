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
        return <li
            className={"filters__item"}>
            <div className="filters__field">
                <input id={`checkbox-dimension`}
                       className="js-auto-submit__input"
                       type="radio"
                       name="filter-dimensions" value={"All"}
                       checked={true}
                       onChange={(e) => {
                           this.checkChanged(e)
                       }}
                />
                <label htmlFor={`checkbox-dimension`} className={"font-size--18"}>
                    All dataset variables
                </label>
            </div>
            {/*<ul className={`list--neutral margin-top--0 margin-bottom--0 ${rootTopic.selected ? "" : "hide"}`}*/}
            {/*    style={listTabStyle}>*/}
            {/*    {childList}*/}
            {/*</ul>*/}
        </li>;
    }

    render() {
        let dimensionsFilterList = this.makeListModel()

        return <div className={"filter-area-border"}>
            <fieldset className="filters__fieldset">
                <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                    this.toggleDimensions()
                }}><i className={this.state.showDimensions ? "up-arrow" : "down-arrow"}/><span>Dimensions</span>
                </legend>
                <div className="js-checkbox-container">
                    <ul className="list--neutral margin-top--0 margin-bottom--0">
                        {dimensionsFilterList}
                    </ul>
                </div>
            </fieldset>
        </div>
    }
}
