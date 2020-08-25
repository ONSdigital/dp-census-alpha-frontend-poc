import React from 'react';
import '../../../styles/App.css';

export class AreaProfileVisualisationTab extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        let datasetList = this.props.visualisations.items.map((visItem) => {
            return (
                <div className={"col--md-40"} key={visItem}>
                    <a href={visItem.links.self.href}>
                        <p className={"font-size--18 margin-top--2 margin-bottom--1 padding-bottom--0 padding-top--0 "}>
                            <u>{visItem.title}</u>
                        </p>
                    </a>
                    <p className={" font-size--16 margin-top--0 padding-top--0"}>
                        [Information on the visualisation would appear here and span around 2 - 3 lines. This text is just a
                        placeholder for the text that would usually appear here.]
                    </p>

                </div>
            )
        })
        return <div>
            {datasetList}
        </div>
    }
}
