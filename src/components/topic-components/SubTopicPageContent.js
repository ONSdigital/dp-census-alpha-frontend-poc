import React from 'react';
import '../../styles/App.css';

import * as textHelper from '../../helpers/Text'

export class SubTopicPageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    makeMainContent() {
        return (
            <div>
                <div className={""}>
                    <p className={"margin-top--2 margin-bottom--0 padding-bottom--0"}>
                        Home > {this.props.rootName} > {this.props.taxTitle}
                    </p>
                    <p className={"area-profile-title-area font-size--18 padding-bottom--0 margin-bottom--0 margin-top--3 padding-top--2"}>{this.props.rootName}</p>
                    <h1 className={"margin-top--1 padding-top--0 margin-bottom--4"}>
                        <b>{textHelper.toTitleCase(this.props.taxTitle)}</b></h1>
                    <div className={"dataset-landing-main"}>
                        <p className={"font-size--18 margin-top--0 padding-top--0"}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam vitae accumsan purus.
                            Suspendisse potenti. Donec euismod diam sit amet mi mattis euismod. Phasellus sem ante,
                            mollis
                            vitae eleifend vel, dignissim ac nisl. Curabitur sodales libero luctus, ultrices justo in,
                            fermentum erat. Nunc id condimentum nisi. Etiam id blandit tellus. Praesent at blandit
                            tortor,
                            viverra hendrerit nibh. Maecenas odio mauris, pellentesque et elit id, accumsan vulputate
                            leo.
                            Duis dapibus, augue non rutrum hendrerit, nibh neque tincidunt ipsum, sollicitudin eleifend
                            diam
                            felis ac erat. Mauris id nisi risus. </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let landingInfo = this.makeMainContent();
        return (<div>
            {landingInfo}
        </div>)
    }
}
