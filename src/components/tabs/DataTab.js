import React from 'react';
import '../../styles/App.css';
import {SortBox} from "../SortBox";
import {FilterMenu} from "../filter/FilterMenu";
import {Results} from "../Results";
import {SelectedSearchFilters} from "../filter/SelectedSearchFilters";
import {CustomTableOpt} from "../CustomTableOpt";
import {makeRequest} from "../../helpers/API";

export class DataTab extends React.Component {

    constructor() {
        super();
        this.state = {
            dimensions: {items: []},
            topics: {},
            filter: []
        }
        this.removeFilterTopic = this.removeFilterTopic.bind(this);
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

    checkChangedDimensions(name, checked) {
        let dimensions = this.state.dimensions;
        dimensions.items.forEach((dim) => {
            if (dim.name === name) {
                dim.selected = checked
            }
        })
        this.setState({dimensions: dimensions})
    }

    checkChangedTopics(name, level) {
        // TODO this only works on top level topics
        let topics = this.state.topics;
        let filters = []
        topics.forEach((topic) => {
            if (level === 0) {
                topic.selected = (topic.filterable_title === name)
            }
            if (topic.selected) {
                filters.push({name: topic.title, value: topic.filterable_title})
            }
            if ((level === 1 || level === 2) && topic.child_topics != null) {
                topic.child_topics.forEach((childTopic) => {
                    if (level === 1) {
                        childTopic.selected = (childTopic.filterable_title === name)
                    }
                    if (childTopic.selected) {
                        filters.push({name: childTopic.title, value: childTopic.filterable_title})
                    }
                    if (level === 2 && childTopic.child_topics != null) {
                        childTopic.child_topics.forEach((grandChildTopic) => {
                            grandChildTopic.selected = (grandChildTopic.filterable_title === name)
                            if (grandChildTopic.selected) {
                                filters.push({name: grandChildTopic.title, value: grandChildTopic.filterable_title})
                            }
                        })
                    }

                })

            }
        })
        this.setState({topics: topics, filter: filters})
    }

    removeFilterTopic(value) {
        let filter = this.state.filter;
        filter.forEach((singleFilter, index) => {
            if (value === singleFilter.value) {
                filter.splice(index, 1)
            }
        })
        let findAndDeselectTopic = (rootTopic, name) => {
            if (rootTopic.filterable_title === name) {
                rootTopic.selected = false;
                return;
            }
            if (rootTopic.child_topics != null) {
                rootTopic.child_topics.forEach((topic) => {
                    findAndDeselectTopic(topic, value);
                })
            }

        };

        let topics = this.state.topics;
        topics.forEach((topic) => {
            findAndDeselectTopic(topic, value);
        })
        this.setState({topics: topics, filter: filter})
    }

    removeFilterDimension(name) {
        let dimensions = this.state.dimensions;
        dimensions.items.forEach((singleDimension, index) => {
            if (name === singleDimension.name) {
                dimensions.selected = false;
            }
        })
        this.setState({dimensions: dimensions})

    }

    render() {
        if (!this.props.show) {
            return null;
        }
        let showCustomTableOpt = true//this.state.results != null && this.state.results.length < 4 TODO put back

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
                        filterTopics={this.state.filter}
                        filterDimensions={this.state.dimensions.items}
                        filterGeographies={[]} // TODO add geography
                        removeFilterTopic={(value) => {
                            this.removeFilterTopic(value)
                        }}
                        removeFilterDimension={(value) => {
                            this.removeFilterDimension(value)
                        }}/>
                    <Results/>
                    <CustomTableOpt/>
                </div>
            </div>
        </div>
    }
}
