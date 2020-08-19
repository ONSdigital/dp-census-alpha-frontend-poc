import React from 'react';
import '../../styles/App.css';
import {SearchBar} from "../header/SearchBar";
import {Breadcrumbs} from "../Breadcrumbs";
import {toTitleCase} from "../../helpers/Text";

export class DatasetLandingPageDimensionOptions extends React.Component {

    makeArrayList(list, maxLength) {
        let arrayList = list.join(" · ")
        if (arrayList.length > maxLength) {
            list.pop();
            arrayList = this.makeArrayList(list, maxLength)
        }
        return arrayList;
    }

    makeInput(category, isLastIndex) {
        const maxLength = 300
        const id = category.name.replace(/ /g, "");
        let arrayToList = this.makeArrayList(category.contains.slice(), maxLength);
        let overflowContent = null
        if (category.contains.join(" · ").length > maxLength) {
            overflowContent = (<div className={"margin-top--0 padding-top--0"}>...
                <br/>
                <button
                    className="page-link btn btn--plain margin-left--0 padding-left--0 margin-top--0 margin-bottom--0 font-size--14"
                    type="button"
                    onClick={() => {
                        this.props.changeStageTo(0);
                    }
                    }>See all categories
                </button>
            </div>)
        }
        let mappingSelectionAreaCSS = "margin-top--3";
        if (!isLastIndex) {
            mappingSelectionAreaCSS = "mappings-selection-area margin-top--3";
        }
        console.log(category.name + " : "+  category.selected);
        return (<div className={mappingSelectionAreaCSS}>
            <input id={`radio-mappings-${id}`}
                   className="js-auto-submit__input mappings-radio margin-left--0 padding-left--0"
                   type="radio"
                   name={`radio-mappings`} value={category.name}
                   checked={category.selected === true}
                   onChange={(e) => {
                       this.props.categoriesChanged(this.props.selectedDimensionID, e.target.value);
                   }}
            />
            <label htmlFor={`radio-mappings-${id}`} className={"mappings-radio-label font-size--18"}>
                {category.name}
            </label>
            <p className={"font-size--14 padding-left--2 margin-top--0"}>
                {arrayToList}
                {overflowContent}
            </p>
        </div>)
    }

    render() {
        if (!this.props.show) {
            return null
        }
        let dimension
        this.props.datasetDetails.results.dimensions.forEach((dim)=>{
            if(dim.label || toTitleCase(dim.name) === this.props.selectedDimensionID){
                dimension = dim;
            }
        })

        const inputs = dimension.categories.map((category, index) => {
            let isLastElement = dimension.categories.length - 1 === index
            return this.makeInput(category, isLastElement);
        })
        return (
            <div className={"col--md-39"}>
                <button
                    className="page-link btn btn--plain margin-left--0 padding-left--0 margin-top--3 margin-bottom--2 font-size--18"
                    type="button"
                    onClick={() => {
                        this.props.changeStageTo(0);
                    }
                    }>Back
                </button>
                <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
                    <b>{"Ethnic group categories"}</b></h1>
                <p className={"font-size--18"}>Select the number of categories for Ethnic group to be displayed within
                    your table.</p>
                <div>
                    {inputs}
                </div>
                <input type="button" value={`Save and continue`} aria-label="save and continue"
                       className="btn btn--primary btn--thick btn--big btn--focus margin-right--2 font-weight-700 font-size--17"
                       name="save and continue"
                       onClick={async () => {
                           this.props.changeStageTo(0);
                       }
                       }
                />

            </div>
        )
    }
}
