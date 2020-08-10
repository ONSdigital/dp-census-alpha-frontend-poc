import React from 'react';
import '../../styles/App.css';

export class FilterGeography extends React.Component {

    constructor(props) {
        super(props);
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
        let geographyRefinementSelected = false;
        this.props.geographies.items.forEach((geo) => {
            if (geo.selected) {
                geographyRefinementSelected = true;
            }
        })
        let geographyOptions = this.props.geographies.items.map((geo) => {
            return <li
                className={"filters__item"}
                key={geo.name}>
                <div className="filters__field">
                    <input id={`checkbox-geography-${geo.name}`}
                           className="js-auto-submit__input checkbox-geography"
                           type="radio"
                           name="filter-geography" value={geo.name}
                           checked={geo.selected}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value, e.target.checked);
                           }}
                    />
                    <label htmlFor={`checkbox-geography-${geo.name}`} className={"font-size--18"}>
                        {geo.label}
                    </label>
                </div>
            </li>
        })

        return <ul className="list--neutral margin-top--0 margin-bottom--0">
            <li
                className={"filters__item"}>
                <div className="filters__field">
                    <input id={`checkbox-geography`}
                           className="js-auto-submit__input checkbox-geography"
                           type="radio"
                           name="filter-geography" value={"all"}
                           checked={!geographyRefinementSelected}
                           onChange={(e) => {
                               this.checkChanged(e)
                           }}
                    />
                    <label htmlFor={`checkbox-geography`} className={"font-size--18"}>
                        All geographical areas
                    </label>
                </div>
            </li>
            {geographyOptions}
        </ul>
    }

    render() {
        let geographyFilterList = this.makeListModel()

        return <div className={"filter-area-border"}>
            <fieldset className="filters__fieldset">
                <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                    this.toggleGeography()
                }}><i className={this.state.showGeography ? "up-arrow" : "down-arrow"}/><span>Output area types</span>
                </legend>
                <div className="js-checkbox-container">
                    {geographyFilterList}
                </div>
            </fieldset>
        </div>
    }
}
