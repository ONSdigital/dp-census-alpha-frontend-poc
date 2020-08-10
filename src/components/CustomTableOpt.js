import React from 'react';
import '../styles/App.css';

export class CustomTableOpt extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (<div className={"custom-table-opt-box font-size--18"}>
            <b>Can't find the right dataset?</b>
            <p className={"font-size--18"}>Using the 2021 Census data you can create your own custom datasets.</p>
            <input type="button" value="Create a custom table"
                   className="btn btn--primary btn--thick margin-bottom--1 btn--focus font-weight-700 font-size--18"/>
        </div>)
    }
}
