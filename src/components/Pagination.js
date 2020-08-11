import React from 'react';
import '../styles/App.css';

export class Pagination extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <div>➔ <b>Next Page</b></div>
                <p className={"padding-bottom--0 padding-top--0 margin-bottom--0 margin-top--0"}>{this.props.currentPageNum} of {this.props.totalPages}</p>
            </div>
        )
    }
}
