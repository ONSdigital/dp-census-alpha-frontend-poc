import React from 'react';
import '../../styles/App.css';

export class AlphaBanner extends React.Component {

    render() {
        return <div className="primary-nav page-title font-size--sm always-show-banner">
            <div className="wrapper"><p className="govuk-phase-banner__content"><strong
                className="govuk-tag govuk-phase-banner__content__tag">alpha</strong><span
                className="govuk-phase-banner__text">This is a Proof-of-Concept prototype</span></p></div>
        </div>
    }
}
