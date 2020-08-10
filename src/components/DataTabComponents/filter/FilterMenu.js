import React from 'react';
import '../../../styles/App.css';
import {FilterTopicsMenu} from "./FilterTopicsMenu"
import {FilterDimensionMenu} from "./FilterDimensionMenu";
import {FilterGeography} from "./FilterGeography";

export class FilterMenu extends React.Component {

    render() {
        return (
            <form id="form" className="js-auto-submit__form">
                <div className="col col--md-12 col--lg-18 margin-bottom">
                    <div className="margin-bottom-md--2 flush-col js-mobile-filters">
                        <div
                            className="background--gallery padding-top-md--1 padding-right-md--1 padding-bottom-md--1 padding-left-sm--1 padding-left-md--1 flush js-mobile-filters__title">
                            <h3 className="inline-block flush filter-title">Filter data</h3>
                        </div>
                        <div
                            className="background--mercury border-top--iron-md padding-top-sm--2 padding-top-md--1 padding-right-sm--1 padding-right-md--1 padding-bottom-sm--2 padding-bottom-md--2 padding-left-sm--1 padding-left-md--1 js-mobile-filters__contents">
                            <div className="filters js-filters">
                                <FilterTopicsMenu topics={this.props.topics} checkChanged={this.props.checkChangedTopics}/>
                                <FilterDimensionMenu dimensions={this.props.dimensions} checkChanged={this.props.checkChangedDimensions}/>
                                <FilterGeography geographies={this.props.geographies} checkChanged={this.props.checkChangedGeographies}/>
                                <input className="sort__input" type="hidden" name="q" value="test"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


