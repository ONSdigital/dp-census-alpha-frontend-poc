import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {TabArea} from "../components/TabArea";
import {Warning} from "../components/Warning";

export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            dimensionsString: "",
            topicsString: "",
            hierarchiesString: "",
            pageNum: 0,
            pageLimit: 10,
            // response: {results: {counts: , items: []}}
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.performSearch = this.performSearch.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.hideWarnings = this.hideWarnings.bind(this);
        this.updateErrorMessage = this.updateErrorMessage.bind(this);
        this.toggleFullList = this.toggleFullList.bind(this);
    }

    componentDidMount() {
        this.handleSearch();
    }

    performSearch(searchString) {
        this.setState({searchString: searchString, pageNum: 0}, () => {
            this.handleSearch();
        })
    }

    handleSearch = async () => {
        await this.submitForm();
    }

    async submitForm() {
        const params = new URLSearchParams(this.props.location.search);
        let searchString = params.get('q');
        if (this.state.searchString !== "") {
            searchString = this.state.searchString;
        }

        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`http://99.80.8.15:10300/search?q=${searchString}&limit=${this.state.pageLimit}&offset=${this.state.pageNum * this.state.pageLimit}&topics=${this.state.topicsString}&dimensions=${this.state.dimensionsString}&hierarchies=${this.state.hierarchiesString}`, `GET`);
        let groupedAreas = [];

        if (responseOBJ.response.results != null && responseOBJ.response.results.area_profiles != null && responseOBJ.response.results.area_profiles.aggregations != null && responseOBJ.response.results.area_profiles.aggregations.hierarchies != null) {
            responseOBJ.response.results.area_profiles.aggregations.hierarchies.buckets.forEach((areaBucket) => {
                if (areaBucket.doc_count > 1) {
                    groupedAreas.push(areaBucket);
                }
            })
        }
        responseOBJ.groupedAreas = groupedAreas;
        this.setState(responseOBJ, () => {
            if (responseOBJ.response.results != null && responseOBJ.response.results.area_profiles != null && responseOBJ.response.results.area_profiles.count > 0) {
                this.getAllAreas();
            } else (this.setState({allAreas: []}))
        });
    }

    getAllAreas = async () => {
        await this.fetchAllAreas();
    }

    async fetchAllAreas() {
        const params = new URLSearchParams(this.props.location.search);
        let searchString = params.get('q');
        if (this.state.searchString !== "") {
            searchString = this.state.searchString;
        }
        let responseOBJ
        responseOBJ = await makeRequest(`http://99.80.8.15:10300/search?q=${searchString}&limit=500&offset=0`, `GET`);
        let allAreas = responseOBJ.results.area_profiles.items;
        this.setState({allAreas: allAreas});
    }

    getNextPage(tabType) {
        // 0 indexed page numbers
        if (tabType === "data") {
            if ((this.state.pageNum + 1) < Math.ceil(this.state.response.results.counts.datasets / this.state.pageLimit)) {
                let newPageNum = this.state.pageNum + 1;
                this.setState({pageNum: newPageNum},
                    () => {
                        this.handleSearch();
                    })
            }
        }
    }

    hideWarnings() {
        this.setState({response: {errorMessage: ""}})
    }

    toggleFullList(key) {
        let groupedAreas = this.state.groupedAreas;
        this.state.groupedAreas.forEach((area) => {
            if (area.key === key) {
                area.view = !area.view
            }
        })
        this.setState({groupedAreas: groupedAreas})
    }

    updateErrorMessage(message) {
        if (this.state.errorMessage === "") {
            this.setState({response: {errorMessage: message}})
        }
    }

    render() {
        // TODO change TabArea vars
        const params = new URLSearchParams(this.props.location.search);
        let searchString = params.get('q');
        if (this.state.searchString !== "") {
            searchString = this.state.searchString;
        }
        let results;
        if (this.state.response != null && this.state.response.results != null) {
            results = this.state.response.results;
        }
        let errorMessage = this.state.response == null ? "" : this.state.response.errorMessage
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString} shouldRedirectToSearch={false}
                           performSearch={this.performSearch}/>
                <TabArea dataResults={0} areaResults={0} publicationResults={0} searchString={searchString}
                         totalPages={this.state.totalPages}
                         pageNum={this.state.pageNum}
                         allAreas={this.state.allAreas}
                         results={results}
                         resultsPerPage={this.state.pageLimit}
                         getNextPage={this.getNextPage}
                         updateErrorMessage={this.updateErrorMessage}
                         toggleFullList={this.toggleFullList}
                         groupedAreas={this.state.groupedAreas}
                         requestSearch={(dimensions, topics, hierarchies, pageNum, limit) => {
                             this.setState({
                                 dimensionsString: dimensions.join(","),
                                 topicsString: topics.join(","),
                                 hierarchiesString: hierarchies.join(","),
                                 pageNum: pageNum,
                                 limit: limit || 10
                             }, () => {
                                 this.handleSearch();
                             })
                         }}/>
            </div>
            <Footer/>
            <Warning message={errorMessage}
                     hideWarnings={this.hideWarnings}/>
        </div>
    }
}
