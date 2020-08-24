import React from 'react';
import '../../../styles/App.css';

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
                key={geo.filterable_hierarchy}>
                <div className="filters__field">
                    <input id={`radio-geography-${geo.filterable_hierarchy}`}
                           className="js-auto-submit__input radio-geography"
                           type="radio"
                           name="filter-geography" value={geo.filterable_hierarchy}
                           checked={geo.selected}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value, e.target.checked);
                           }}
                    />
                    <label htmlFor={`radio-geography-${geo.filterable_hierarchy}`} className={"font-size--18"}>
                        {geo.hierarchy}
                    </label>
                </div>
            </li>
        })

        return <ul className="list--neutral margin-top--0 margin-bottom--0">
            <p>Show data available at:</p>
            <li
                className={"filters__item"}>
                <div className="filters__field">
                    <input id={`radio-geography`}
                           className="js-auto-submit__input radio-geography"
                           type="radio"
                           name="filter-geography" value={"all"}
                           checked={!geographyRefinementSelected}
                           onChange={(e) => {
                               this.props.checkChanged("all")
                           }}
                    />
                    <label htmlFor={`radio-geography`} className={"font-size--18"}>
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
                <div className="js-radio-container">
                    {geographyFilterList}
                </div>
            </fieldset>
        </div>
    }
}
