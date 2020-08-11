import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {TabArea} from "../components/TabArea";
import {Warning} from "../components/Warning";

export class SearchPage extends React.Component {
//TODO on search query change the filters are lost
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

        // TODO change API request
        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`http://99.80.8.15:10300/search?q=${searchString}&limit=${this.state.pageLimit}&offset=${this.state.pageNum * this.state.pageLimit}&topics=${this.state.topicsString}&dimensions=${this.state.dimensionsString}&hierarchies=${this.state.hierarchiesString}`, `GET`);
        this.setState(responseOBJ);
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

    updateErrorMessage(message) {
        if(this.state.errorMessage === ""){
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
                         totalPages={this.state.totalPages} pageNum={this.state.pageNum}
                         results={results}
                         resultsPerPage={this.state.pageLimit}
                         getNextPage={this.getNextPage}
                         updateErrorMessage={this.updateErrorMessage}
                         requestSearch={(dimensions, topics, hierarchies, pageNum) => {
                             this.setState({
                                 dimensionsString: dimensions.join(","),
                                 topicsString: topics.join(","),
                                 hierarchiesString: hierarchies.join(","),
                                 pageNum: pageNum
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
