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

    createGrandChildTopics(rootTopic, selectedChildTopic) {
        let show = (selectedChildTopic != null && selectedChildTopic.child_topics != null && selectedChildTopic.child_topics.length > 0);
        if (!show) {
            return null;
        }
        let options = selectedChildTopic.child_topics.map((grandChildTopic) => {
            return <option className={"font-size--18"}
                           value={grandChildTopic.filterable_title}>{grandChildTopic.title}</option>
        })

        return (<div className={"topic-group"}>
            <select className={"font-size--18 margin-left--1 col--md-14"}
                    name={`topic-${rootTopic.filterable_title}-grandchild`}
                    id={`topic-${rootTopic.filterable_title}-grandchild`}
                    onChange={(e) => {
                        let topicLevel = 2;
                        this.props.checkChanged(e.target.value, topicLevel)
                    }}>
                <option className={"font-size--18"} value="all">All sub topics</option>
                {options}
            </select>
        </div>)
    }

    createChildTopics(rootTopic) {
        if (!rootTopic.selected) {
            return null;
        }
        let options = rootTopic.child_topics.map((childTopic) => {
            return <option className={"font-size--18"} value={childTopic.filterable_title}>{childTopic.title}</option>
        })
        let selectedChildTopic = null;
        rootTopic.child_topics.forEach((childTopic) => {
            if (childTopic.selected) {
                selectedChildTopic = childTopic
            }
        })
        let grandChildTopics = this.createGrandChildTopics(rootTopic, selectedChildTopic);
        return (<div>
            <div className={"topic-group"}>
                <select className={"font-size--18 margin-left--1 col--md-14"}
                        name={`topic-${rootTopic.filterable_title}`}
                        id={`topic-${rootTopic.filterable_title}`}
                        onChange={(e) => {
                            let topicLevel = 1;
                            this.props.checkChanged(e.target.value, topicLevel)
                        }}>
                    <option className={"font-size--18"} value="all">All sub topics</option>
                    {options}
                </select>
            </div>
            {grandChildTopics}
        </div>)

    }

    makeListModel() {
        if (!this.state.showTopics) {
            return null;
        }
        let refinementSelectedRoot = false;
        let topics = this.props.topics.map((rootTopic) => {
            if (rootTopic.selected) {
                refinementSelectedRoot = true;
            }
            let subTopics = this.createChildTopics(rootTopic);
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
                               let topicLevel = 0;
                               this.props.checkChanged(e.target.value, topicLevel);
                           }}
                    />
                    <label htmlFor={`checkbox-topic-${rootTopic.filterable_title}`} className={"font-size--18"}>
                        {rootTopic.title}
                    </label>
                </div>
                {subTopics}
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
