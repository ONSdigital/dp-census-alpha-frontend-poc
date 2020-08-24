import React from 'react';
import '../../styles/App.css';

export class TitleArea extends React.Component {
    render() {
        return (<div>
            <p className={"font-size--16 padding-bottom--0 margin-bottom--1"}>{this.props.hierarchy}</p>
            <h1 className={"margin-top--0 padding-top--0 margin-bottom--4"}>
            {this.props.name}</h1>
        </div>)
    }
}
