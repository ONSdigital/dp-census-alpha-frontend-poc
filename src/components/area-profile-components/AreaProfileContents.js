import React from 'react';
import '../../styles/App.css';
import {TitleArea} from "./TitleArea";
import {DatasetSearchBar} from "./DatasetSearchBar";
import {AreaProfileInfo} from "./AreaProfileInfo";

export class AreaProfileContents extends React.Component {
    render() {
        return (<div>
            <TitleArea name={this.props.areaProfile.name} hierarchy={this.props.areaProfile.hierarchy}/>
            <DatasetSearchBar searchString={""}/>
            <AreaProfileInfo areaProfile={this.props.areaProfile}/>
        </div>)
    }
}
