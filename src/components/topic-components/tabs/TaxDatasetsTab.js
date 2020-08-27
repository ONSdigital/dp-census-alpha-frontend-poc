import React from 'react';
import '../../../styles/App.css';
import {CustomAreaTable} from "../../area-profile-components/CustomAreaTable";

export class TaxDatasetsTab extends React.Component {

    render() {
        if (!this.props.show || this.props.datasets.items == null) {
            return null;
        }
        let datasetList = this.props.datasets.items.map((datasetItem, i) => {
            let sectionClass = (this.props.datasets.items.length-1 === i)? "col--md-40" : "col--md-40 border-bottom"
            return (
                <div className={sectionClass} key={datasetItem + "-" + i}>
                    <a href={`/dp-census-alpha-frontend-poc/area-dataset/${datasetItem.alias}`}>
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


        return <div>
            {datasetList}
            <CustomAreaTable show={true}/>

        </div>
    }
}
