import React from 'react';
import '../../styles/App.css';

export class FilterTopicsMenu extends React.Component {

    constructor() {
        super();
        this.state = {"showTopics": false};
        this.toggleTopics = this.toggleTopics.bind(this);
    }

    toggleTopics() {
        this.setState({"showTopics": !this.state.showTopics})
    }

    makeListModel() {
        if (!this.state.showTopics) {
            return null;
        }
        return <li
            className={"filters__item"}>
            <div className="filters__field">
                <input id={`checkbox-topic`}
                       className="js-auto-submit__input"
                       type="radio"
                       name="filter-topics" value={"All"}
                       checked={true}
                       onChange={(e) => {
                           this.checkChanged(e)
                       }}
                />
                <label htmlFor={`checkbox-topic`} className={"font-size--18"}>
                    All topics
                </label>
            </div>
            {/*<ul className={`list--neutral margin-top--0 margin-bottom--0 ${rootTopic.selected ? "" : "hide"}`}*/}
            {/*    style={listTabStyle}>*/}
            {/*    {childList}*/}
            {/*</ul>*/}
        </li>;
    }

    render() {
        let topicFilterList = this.makeListModel()

        return <fieldset className="filters__fieldset">
            <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                this.toggleTopics()
            }}><i className={this.state.showTopics ? "up-arrow" : "down-arrow"}/><span>Topics</span>
            </legend>
            <div className="js-checkbox-container">
                <ul className="list--neutral margin-top--0 margin-bottom--0">
                    {topicFilterList}
                </ul>
            </div>
        </fieldset>
    }
}
