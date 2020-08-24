import React from 'react';
import '../../styles/App.css';

export class SortBox extends React.Component {

    render() {
        return <span className={"sort-options"}>
                      <label className={"sort-options-label font-size--18"} htmlFor="sort">Sort by</label>
                      <select className={"sort-options-select font-size--18"} name="sort" id="sort">
                        <option className={"font-size--18"} value="relevance">Relevance</option>
                      </select>
                </span>
    }
}


