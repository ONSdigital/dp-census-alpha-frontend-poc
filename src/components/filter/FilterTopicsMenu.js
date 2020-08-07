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
        let refinementSelectedRoot = false;
        let topics = this.props.topics.map((rootTopic) => {
            if(rootTopic.selected){
                refinementSelectedRoot = true;
            }
            return <li
                className={"filters__item"}
            key={`checkbox-topic-${rootTopic.filterable_title}`}>
                <div className="filters__field">
                    <input id={`checkbox-topic-${rootTopic.filterable_title}`}
                           className="js-auto-submit__input checkbox-topic"
                           type="radio"
                           name="filter-topics" value={rootTopic.filterable_title}
                           checked={rootTopic.selected}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value)
                           }}
                    />
                    <label htmlFor={`checkbox-topic-${rootTopic.filterable_title}`} className={"font-size--18"}>
                        {rootTopic.title}
                    </label>
                </div>
                {/*<ul className={`list--neutral margin-top--0 margin-bottom--0 ${rootTopic.selected ? "" : "hide"}`}*/}
                {/*    style={listTabStyle}>*/}
                {/*    {childList}*/}
                {/*</ul>*/}
            </li>
        });
        return (<ul className="list--neutral margin-top--0 margin-bottom--0">
            <li
                className={"filters__item"}
                key={`checkbox-topic-all`}>
                <div className="filters__field">
                    <input id={`checkbox-topic-all`}
                           className="js-auto-submit__input checkbox-topic"
                           type="radio"
                           name="filter-topics" value={"All"}
                           checked={!refinementSelectedRoot}
                           onChange={(e) => {
                               this.props.checkChanged(e.target.value)
                           }}
                    />
                    <label htmlFor={`checkbox-topic-all`} className={"font-size--18"}>
                        All topics
                    </label>
                </div>
                {/*<ul className={`list--neutral margin-top--0 margin-bottom--0 ${rootTopic.selected ? "" : "hide"}`}*/}
                {/*    style={listTabStyle}>*/}
                {/*    {childList}*/}
                {/*</ul>*/}
            </li>
            {topics}
        </ul>)
    }

    render() {
        let topicFilterList = this.makeListModel()

        return <fieldset className="filters__fieldset">
            <legend className="filters__sub-title font-size--18 filter-root-title" onClick={() => {
                this.toggleTopics()
            }}><i className={this.state.showTopics ? "up-arrow" : "down-arrow"}/><span>Topics</span>
            </legend>
            <div className="js-checkbox-container">
                {topicFilterList}
            </div>
        </fieldset>
    }
}
