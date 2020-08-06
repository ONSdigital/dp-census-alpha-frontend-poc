import React from 'react';
import '../../styles/App.css';

export class PublicationsTab extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        return <div className={"missing-page-publications"}>
            [PUBLICATIONS]
        </div>
    }
}
