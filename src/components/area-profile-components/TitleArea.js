import React from 'react';
import '../../styles/App.css';

export class TitleArea extends React.Component {
    render() {
        return (<div className={""}>
            <p className={"area-profile-title-area font-size--16 padding-bottom--0 margin-bottom--1 padding-top--2"}>{this.props.hierarchy}</p>
            <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
            {this.props.name}</h1>
        </div>)
    }
}
