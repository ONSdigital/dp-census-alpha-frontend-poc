import React from 'react';
import '../../../styles/App.css';
import {CustomAreaTable} from "../CustomAreaTable";

export class AreaProfileDatasetsTab extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        let datasetList = [];
        if (this.props.datasetSearchResults != null) {
            datasetList = this.props.datasetSearchResults.map((datasetItem) => {
                return (
                    <div className={"col--md-40"} key={datasetItem}>
                        <a href={`/dp-census-alpha-frontend-poc/dataset-landing/${datasetItem.alias}`}>
                            <p className={"font-size--18 margin-top--2 margin-bottom--1 padding-bottom--0 padding-top--0 "}>
                                <u>{datasetItem.title}</u>
                            </p>
                        </a>
                        <p className={" font-size--16 margin-top--0 padding-top--0"}>
                            {datasetItem.description}
                        </p>

                    </div>
                )
            })
        } else {
            datasetList = this.props.datasets.items.map((datasetItem) => {
                return (
                    <div className={"col--md-40"} key={datasetItem}>
                        <a href={datasetItem.links.self.href}>
                            <p className={"font-size--18 margin-top--2 margin-bottom--1 padding-bottom--0 padding-top--0 "}>
                                <u>{datasetItem.title}</u>
                            </p>
                        </a>
                        <p className={" font-size--16 margin-top--0 padding-top--0"}>
                            [Information on the dataset would appear here and span around 2 - 3 lines. This text is just
                            a
                            placeholder for the text that would usually appear here.]
                        </p>

                    </div>
                )
            })
        }

        return <div>
            {datasetList}
            <CustomAreaTable show={true}/>
        </div>
    }
}
