import React from 'react';
import '../../styles/App.css';

export class Results extends React.Component {


    render() {
        let displayList;
        if (this.props.results != null && this.props.results != null && this.props.results.items != null && this.props.results.items.length > 0) {
            displayList = this.props.results.items.map((singleResult, index) => {
                return <li key={index} className="col col--md-34 col--lg-40 search-results__item search-result-item">
                    <a onClick={() => {
                        //TODO onClick open datasetLanding page
                        //this.props.parentSearch(singleResult.location)
                    }}
                       className={"pointer"}
                    href={"#"}>
                        {singleResult.title}
                        <p className="search-results-desc">
                            {singleResult.description}
                        </p>
                        <p className={"search-results-meta"}>Released [dd Month yyyy] | {singleResult.hierarchy} and above<br/>
                        </p>
                    </a>
                </li>;
            });
        }
        return (
            <div className="search-results wrapper col col--md-34 col--lg-40 margin-left-md--1">
                <ul className="list--neutral results-list">{displayList}</ul>
            </div>
        )
    }
}
