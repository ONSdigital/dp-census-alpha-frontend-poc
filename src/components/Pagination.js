import React from 'react';
import '../styles/App.css';

export class Pagination extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className={"pagination-area margin-left--19"} onClick={()=>{this.props.nextPage()}}>
                    <div className={"pagination-title"}>➔ <b>Next Page</b></div>
                    <p className={"pagination-page-nums padding-bottom--0 padding-top--0 margin-bottom--0 margin-top--0"}>{this.props.pageNum} of {this.props.totalPages}</p>
            </div>
        )
    }
}
