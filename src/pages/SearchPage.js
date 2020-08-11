import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {TabArea} from "../components/TabArea";

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
            response: {results: {count: 0, items: []}}
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    componentDidMount() {
        this.handleSearch();
    }

    performSearch(searchString) {
        this.setState({searchString: searchString}, () => {
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
        responseOBJ.response = await makeRequest(`http://34.248.174.250:10200/datasets?q=${searchString}&offset=${this.state.pageNum * this.state.pageLimit}&topics=${this.state.topicsString}&dimensions=${this.state.dimensionsString}&hierarchies=${this.state.hierarchiesString}`, `GET`);
        this.setState(responseOBJ);
    }

    render() {
        // TODO change TabArea vars
        const params = new URLSearchParams(this.props.location.search);
        let searchString = params.get('q');
        if (this.state.searchString !== "") {
            searchString = this.state.searchString;
        }
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString} shouldRedirectToSearch={false}
                           performSearch={this.performSearch}/>
                <TabArea dataResults={0} areaResults={0} publicationResults={0} searchString={searchString}
                         totalPages={this.state.totalPages} pageNum={this.state.pageNum}
                         results={this.state.response.results}
                         requestSearch={(dimensions, topics, hierarchies, pageNum) => {
                             //TODO make use of the others when API available
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
        </div>
    }
}
