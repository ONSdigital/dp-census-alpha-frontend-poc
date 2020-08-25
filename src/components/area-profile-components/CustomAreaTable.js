import React from 'react';
import '../../styles/App.css';

export class CustomAreaTable extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (<div className={"custom-area-table-opt-box col--md-30 font-size--18 margin-left--0 margin-top--5"}>
            <b>Can't find what you're looking for?</b>
            <input type="button" value="Create a custom table for this area"
                   className="btn btn--primary btn--thick margin-bottom--1 btn--focus font-weight-700 font-size--18"/>
        </div>)
    }
}
