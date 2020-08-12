import React from 'react';
import '../styles/App.css';
import {makeRequest} from "../helpers/API";

export class Breadcrumbs extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
        this.makeBread = this.makeBread.bind(this);
    }

    componentDidMount() {
        this.getTopics();
    }

    getTopics = async () => {
        await this.submitTopicsRequest();
    }

    async submitTopicsRequest() {
        let response = await makeRequest(`http://99.80.8.15:10300/taxonomy`, `GET`);
        this.setState({
            errorMessage: response.errorMessage,
            topics: response.results.topics
        }, () => {
            this.props.updateErrorMessage(this.state.errorMessage);
        });
    }

    makeBread() {
        let themeText = this.props.datasetTheme;
        let themes = themeText.split("/");
        if (themes[0] === "") {
            themes.splice(0, 1);
        }
        let checkAndReplaceTopics = (topics) => {
            topics.forEach((topic) => {
                console.log("topic.filterable_title: " + topic.filterable_title);
                let indexOfMatch = themes.indexOf(topic.filterable_title)
                if (indexOfMatch > -1) {
                    themes[indexOfMatch] = topic.title;
                }
                if (topic.child_topics != null && topic.child_topics.length > 0) {
                    checkAndReplaceTopics(topic.child_topics);
                }
            })
        }
        if (this.state.topics != null) {
            checkAndReplaceTopics(this.state.topics)
        }

        let themeBreadcrumbs = themes.map((theme, index) => {
            return (index === (themes.length - 1)) ? (<span> <a href={"#"}>{theme}</a></span>) : (
                <span> <a href={"#"}>{theme}</a> > </span>)
        })

        return <div><span> <a href={"/dp-census-alpha-frontend-poc/"}>Home</a> > </span>{themeBreadcrumbs}
        </div>
    }

    render() {
        let breadcrumbs = this.makeBread();
        return (<div className="breadcrumbs">
            {breadcrumbs}
        </div>)
    }
}
