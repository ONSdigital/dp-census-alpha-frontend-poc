import React from 'react';
import '../../styles/App.css';
import {SortBox} from "../SortBox";
import {FilterMenu} from "../filter/FilterMenu";
import {Results} from "../Results";
import {SelectedSearchFilters} from "../filter/SelectedSearchFilters";
import {makeRequest} from "../../helpers/API";

export class DataTab extends React.Component {

    constructor() {
        super();
        this.state = {
            dimensions: {},
            topics: {},
            filter: [
                {name: "People, population and community", value: "peoplepopulationandcommunity"},
                {name: "Cultural identity", value: "cultrualidentity"},
                {name: "Ethnicity", value: "ethnicity"}]
        }
        this.removeFilter = this.removeFilter.bind(this);
        this.submitTopicsRequest = this.submitTopicsRequest.bind(this);
        this.getTopics = this.getTopics.bind(this);
        this.submitDimensionsRequest = this.submitDimensionsRequest.bind(this);
        this.getDimensions = this.getDimensions.bind(this);
        this.checkChangedDimensions = this.checkChangedDimensions.bind(this);
        this.checkChangedTopics = this.checkChangedTopics.bind(this);
    }

    componentDidMount() {
        this.getTopics();
        this.getDimensions();
    }

    getTopics = async () => {
        await this.submitTopicsRequest();
    }

    async submitTopicsRequest() {
        let response = await makeRequest(`http://34.248.174.250:10200/taxonomy`, `GET`);
        //TODO handle error message, and don't populate topics if an error happened as you cant and it will fail
        this.setState({
            errorMessage: response.errorMessage,
            topics: response.results.topics
        });
    }

    getDimensions = async () => {
        await this.submitDimensionsRequest();
    }

    async submitDimensionsRequest() {
        let response = await makeRequest(`http://34.248.174.250:10200/dimensions`, `GET`);
        this.setState({
            errorMessage: response.errorMessage,
            dimensions: response.results
        });
    }

    checkChangedDimensions(name) {
        let dimensions = this.state.dimensions;
        dimensions.items.forEach((dim) => {
            dim.selected = (name === dim.name ? true : false)
        })
        this.setState({dimensions: dimensions})
    }

    checkChangedTopics(name) {
        let topics = this.state.topics;
        topics.forEach((topic) => {
            topic.selected = (topic.filterable_title === name ? true : false)
        })
        this.setState({topics: topics})
    }

    removeFilter(value) {
        let filter = this.state.filter;
        filter.forEach((singleFilter, index) => {
            if (value === singleFilter.value) {
                filter.splice(index, 1)
            }
        })
        this.setState({filter: filter})
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return <div className={"results-found"}>
            <div>
                <span
                    className={"font-size--24"}>{this.props.totalResults} results for data containing <b>{this.props.searchString}</b></span>
                <SortBox/>
                <div className={"padding-top--4"}>
                    <FilterMenu topics={this.state.topics} dimensions={this.state.dimensions}
                                checkChangedDimensions={this.checkChangedDimensions}
                                checkChangedTopics={this.checkChangedTopics}/>
                    <SelectedSearchFilters
                        filters={this.state.filter}
                        removeFilter={(value) => {
                            this.removeFilter(value)
                        }}/>
                    <Results/>
                </div>
            </div>
        </div>
    }
}
