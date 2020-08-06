import React from 'react';
import '../../styles/App.css';

export class FilterGeography extends React.Component {

    constructor() {
        super();
        this.state = {"showGeography": false};
        this.toggleGeography = this.toggleGeography.bind(this);
    }

    toggleGeography() {
        this.setState({"showGeography": !this.state.showGeography})
    }

    makeListModel() {
        if (!this.state.showGeography) {
            return null;
        }
        return <li
            className={"filters__item"}>
            <div className="filters__field">
                <input id={`checkbox-geography`}
                       className="js-auto-submit__input"
                       type="radio"
                       name="filter-geography" value={"All"}
                       checked={true}
                       onChange={(e) => {
                           this.checkChanged(e)
                       }}
                />
                <label htmlFor={`checkbox-geography`} className={"font-size--18"}>
                    All geographical areas
                </label>
            </div>
            {/*<ul className={`list--neutral margin-top--0 margin-bottom--0 ${rootTopic.selected ? "" : "hide"}`}*/}
            {/*    style={listTabStyle}>*/}
            {/*    {childList}*/}
            {/*</ul>*/}
        </li>;
    }

    render() {
        let geographyFilterList = this.makeListModel()

        return <div className={"filter-area-border"}>
            <fieldset className="filters__fieldset">
                <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                    this.toggleGeography()
                }}><i className={this.state.showGeography ? "up-arrow" : "down-arrow"}/><span>Geographic areas</span>
                </legend>
                <div className="js-checkbox-container">
                    <ul className="list--neutral margin-top--0 margin-bottom--0">
                        {geographyFilterList}
                    </ul>
                </div>
            </fieldset>
        </div>
    }
}
