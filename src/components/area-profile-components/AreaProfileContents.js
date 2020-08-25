import React from 'react';
import '../../styles/App.css';
import {TitleArea} from "./TitleArea";
import {DatasetSearchBar} from "./DatasetSearchBar";
import {AreaProfileInfo} from "./AreaProfileInfo";
import {makeRequest} from "../../helpers/API";

export class AreaProfileContents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchString: ""
        }
        this.handleAreaDatasetSearch = this.handleAreaDatasetSearch.bind(this);
        this.setSearchInput = this.setSearchInput.bind(this);
        this.submitSearchRequest = this.submitSearchRequest.bind(this);
    }

    handleAreaDatasetSearch() {
        this.submitSearchRequest()
    }

    async submitSearchRequest() {
        let response = await makeRequest(`http://99.80.8.15:10300/area-profiles/${this.props.areaProfile.id}/search?q=${this.state.searchString}`, `GET`);
        this.setState({
            errorMessage: response.errorMessage,
            searchedDatasets: response.results
        }, () => {
            // this.props.updateErrorMessage(this.state.errorMessage);
        });
    }

    setSearchInput(input) {
        this.setState({searchString: input, errorText: ""}, () => {
            this.handleAreaDatasetSearch();
        });

    }

    render() {
        let searchedDataset = null;
        if (this.state.searchedDatasets != null && this.state.searchedDatasets.items != null) {
            searchedDataset = this.state.searchedDatasets.items
        }

        return (<div>
            <div className={"font-size--14 margin-top--2 margin-bottom--2"}>Home > UK > [Country] > [County]
                > <b>{this.props.areaProfile.name}</b></div>
            <TitleArea name={this.props.areaProfile.name} hierarchy={this.props.areaProfile.hierarchy}/>
            <DatasetSearchBar searchString={this.state.searchString} setSearchInput={this.setSearchInput}/>
            <AreaProfileInfo areaProfile={this.props.areaProfile} datasetSearchResults={searchedDataset}/>
        </div>)
    }
}
