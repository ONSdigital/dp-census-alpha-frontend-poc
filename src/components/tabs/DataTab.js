import React from 'react';
import '../../styles/App.css';
import {SortBox} from "../DataTabComponents/SortBox";
import {FilterMenu} from "../DataTabComponents/filter/FilterMenu";
import {Results} from "../DataTabComponents/Results";
import {SelectedSearchFilters} from "../DataTabComponents/filter/SelectedSearchFilters";
import {CustomTableOpt} from "../DataTabComponents/CustomTableOpt";
import {GeoSnapshot} from "../DataTabComponents/GeoSnapshot";
import {makeRequest} from "../../helpers/API";

export class DataTab extends React.Component {
//TODO
// Search on change of any filters
    constructor(props) {
        super(props);
        this.state = {
            dimensions: {items: []},
            // TODO replace with new endpoint
            geographies: {
                items: [
                    {label: "Nationally", name: "nationally"},
                    {label: "Regionally", name: "regionally"},
                    {label: "Health Areas", name: "healthareas"},
                    {label: "Constituencies", name: "constituencies"},
                    {label: "Built-up Areas", name: "builtupareas"},
                    {label: "Parishes", name: "parishes"},
                    {label: "Middle Super Layer Output areas", name: "middlesuperlayeroutputareas"},
                    {label: "Lower Super Layer Output areas", name: "lowersuperlayeroutputareas"},
                    {label: "Output areas", name: "outputareas"},
                    {label: "postcode sectors", name: "postcodesectors"},
                ]
            },
            topics: {},
            filter: [],
            pageNum: 0
        }
        this.removeFilterTopic = this.removeFilterTopic.bind(this);
        this.removeFilterDimension = this.removeFilterDimension.bind(this);
        this.removeGeographyDimension = this.removeGeographyDimension.bind(this);
        this.submitTopicsRequest = this.submitTopicsRequest.bind(this);
        this.getTopics = this.getTopics.bind(this);
        this.submitDimensionsRequest = this.submitDimensionsRequest.bind(this);
        this.getDimensions = this.getDimensions.bind(this);
        this.checkChangedDimensions = this.checkChangedDimensions.bind(this);
        this.checkChangedTopics = this.checkChangedTopics.bind(this);
        this.checkChangedGeographies = this.checkChangedGeographies.bind(this);
        this.newSearch = this.newSearch.bind(this);
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
        this.setState({dimensions: dimensions}, ()=>{
            this.newSearch();
        })
    }

    checkChangedGeographies(name, checked) {
        let geographies = this.state.geographies;
        geographies.items.forEach((geo) => {
            geo.selected = (geo.name === name)
        })
        this.setState({geographies: geographies}, ()=>{
            this.newSearch();
        })
    }

    checkChangedTopics(name, level) {

        let topics = this.state.topics;
        let filters = []
        let clearAllTopics = (topic) => {
            topic.selected = false;
            if (topic.child_topics != null) {
                topic.child_topics.forEach((childTopic) => {
                    clearAllTopics(childTopic)
                })
            }
        }
        if (name === "all") {
            topics.forEach((topic) => {
                clearAllTopics(topic);
            })
            this.setState({topics: topics, filter: filters}, ()=>{
                this.newSearch();
            })
            return;
        }
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
        this.setState({topics: topics, filter: filters}, ()=>{
            this.newSearch();
        })
    }

    removeFilterTopic(value) {
        let filter = this.state.filter;
        filter.forEach((singleFilter, index) => {
            if (value === singleFilter.value) {
                filter.splice(index, filter.length - index)
            }
        })
        let findAndDeselectTopic = (rootTopic, name) => {
            if (rootTopic.filterable_title === name) {
                rootTopic.selected = false;
                if (rootTopic.child_topics != null) {
                    rootTopic.child_topics.forEach((childTopic) => {
                        rootTopic.selected = false;
                        if (childTopic.child_topics != null) {
                            childTopic.child_topics.forEach((grandChildTopic) => {
                                grandChildTopic.selected = false;
                            })
                        }
                    })
                }
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
        this.setState({topics: topics, filter: filter}, ()=>{
            this.newSearch();
        })
    }

    removeFilterDimension(name) {
        let dimensions = this.state.dimensions;
        dimensions.items.forEach((singleDimension) => {
            if (name === singleDimension.name) {
                singleDimension.selected = false;
            }
        })
        this.setState({dimensions: dimensions}, ()=>{
            this.newSearch();
        })
    }

    removeGeographyDimension(name) {
        let geographies = this.state.geographies;
        geographies.items.forEach((singleGeography) => {
            if (name === singleGeography.name) {
                singleGeography.selected = false;
            }
        })
        this.setState({geographies: geographies}, ()=>{
            this.newSearch();
        })
    }

    newSearch() {
        let dimensions = [];
        this.state.dimensions.items.forEach((item) => {
            if (item.selected) {
                dimensions.push(item.name);
            }
        })
        let topics = []
        this.state.filter.forEach((topic) => {
            topics.push(topic.value)
        })
        let hierarchies = []
        this.state.geographies.items.forEach((item) => {
            if (item.selected) {
                hierarchies.push(item.name);
            }
        })
        this.props.requestSearch(dimensions, topics, hierarchies, this.state.pageNum);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        let showCustomTableOpt = this.state.results == null || this.state.results.length < 4
        let showGeoArea = false;
        let area = null
        let areaCount = 0;
        if (this.results != null && this.results.area_profiles != null && this.results.area_profiles.items != null && this.results.area_profiles.items[0] != null) {
            showGeoArea = true;
            area = this.results.area_profiles.items[0];
            areaCount = this.results.area_profiles.count;
        }

        return <div className={"results-found"}>
            <div>
                <span
                    className={"font-size--24"}>{this.props.totalResults} results for data containing <b>{this.props.searchString}</b></span>
                <SortBox/>
                <div className={"padding-top--4"}>
                    <FilterMenu topics={this.state.topics} dimensions={this.state.dimensions}
                                geographies={this.state.geographies}
                                checkChangedDimensions={this.checkChangedDimensions}
                                checkChangedTopics={this.checkChangedTopics}
                                checkChangedGeographies={this.checkChangedGeographies}
                    />
                    <SelectedSearchFilters
                        filterTopics={this.state.filter}
                        filterDimensions={this.state.dimensions.items}
                        filterGeographies={this.state.geographies} // TODO add geography
                        removeFilterTopic={(value) => {
                            this.removeFilterTopic(value)
                        }}
                        removeFilterDimension={(value) => {
                            this.removeFilterDimension(value)
                        }}
                        removeGeographyDimension={(value) => {
                            this.removeGeographyDimension(value)
                        }}/>
                    <GeoSnapshot show={showGeoArea} area={area} count={areaCount}/>
                    <Results/>
                    <CustomTableOpt show={showCustomTableOpt}/>
                </div>
            </div>
        </div>
    }
}
