import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {makeRequest} from "../helpers/API";
import {SearchBar} from "../components/header/SearchBar";
import {TabArea} from "../components/TabArea";

export class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"searchString": ""};
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = async () => {
        await this.submitForm();
    }

    async submitForm() {
        const params = new URLSearchParams(this.props.location.search);
        const searchString = params.get('q');
        // TODO change API request
        let responseOBJ = {};
        responseOBJ.response = await makeRequest(`http://34.248.174.250:10200/datasets?q=${searchString}`, `GET`);
        this.setState(responseOBJ);
    }

    render() {
        // TODO change TabArea vars
        const params = new URLSearchParams(this.props.location.search);
        const searchString = params.get('q');
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar searchString={searchString}/>
                <TabArea dataResults={0} areaResults={0} publicationResults={0} searchString={searchString}
                         requestSearch={(searchString, offset, dimensions, topics, hierarchies) => {
                             //TODO make use of the others when API available
                             this.setState({searchString: searchString})
                             this.handleSearch();
                         }}/>
            </div>
            <Footer/>
        </div>
    }
}
