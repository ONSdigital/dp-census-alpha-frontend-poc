import React from 'react';
import '../../styles/App.css';

export class Taxonomy extends React.Component {

    render() {
        return(
        <div className="primary-nav print--hide">
            <nav>
                <ul className="nav--controls">
                    <li className="nav--controls__item">
                        <a href="#nav-primary" id="menu-toggle" aria-controls="nav-primary" className="nav--controls__menu ">
                            <span className="nav--controls__text">Menu</span>
                        </a>
                    </li>
                    <li className="nav--controls__item ">
                        <a href="#nav-search" id="search-toggle" aria-controls="nav-search" className="nav--controls__search">
                            <span className="nav--controls__text">Search</span>
                        </a>
                    </li>
                </ul>
                <div className="wrapper nav-main--hidden" id="nav-primary" aria-expanded="false">
                    <ul className="primary-nav__list">
                        <li className="primary-nav__item js-nav hide--sm old-ie--display-block">
                            <a className="primary-nav__link col col--md-7 col--lg-9" href="/dp-census-alpha-frontend-poc">Home</a>
                        </li>
                        <li className="primary-nav__item js-nav">
                            <a className="primary-nav__link  col col--md-8 col--lg-10" href="/census">
                               Census
                            </a>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/businessindustryandtrade"
                               aria-haspopup="true">Business, industry and trade</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/business">Business</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/changestobusiness">Changes to business</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/constructionindustry">Construction industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/itandinternetindustry">IT and internet industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/internationaltrade">International trade</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/manufacturingandproductionindustry">Manufacturing and
                                        production industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/retailindustry">Retail industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/businessindustryandtrade/tourismindustry">Tourism industry</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/economy"
                               aria-haspopup="true">Economy</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/economy/economicoutputandproductivity">Economic output and productivity</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/economy/environmentalaccounts">Environmental
                                        accounts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/economy/governmentpublicsectorandtaxes">Government, public sector and taxes</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/economy/grossdomesticproductgdp">Gross Domestic Product (GDP)</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/economy/grossvalueaddedgva">Gross
                                        Value Added (GVA)</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/economy/inflationandpriceindices">Inflation and price indices</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/economy/investmentspensionsandtrusts">Investments, pensions and trusts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/economy/nationalaccounts">National
                                        accounts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/economy/regionalaccounts">Regional
                                        accounts</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/employmentandlabourmarket"
                               aria-haspopup="true">Employment and labour market</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/employmentandlabourmarket/peopleinwork">People in work</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/employmentandlabourmarket/peoplenotinwork">People not in work</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/peoplepopulationandcommunity"
                               aria-haspopup="true">People, population and community</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/birthsdeathsandmarriages">Births, deaths and
                                        marriages</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/crimeandjustice">Crime and justice</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/culturalidentity">Cultural identity</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/educationandchildcare">Education and childcare</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/elections">Elections</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/healthandsocialcare">Health and social care</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/householdcharacteristics">Household
                                        characteristics</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/housing">Housing</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/leisureandtourism">Leisure and tourism</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/personalandhouseholdfinances">Personal and household
                                        finances</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/populationandmigration">Population and migration</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/peoplepopulationandcommunity/wellbeing">Well-being</a>
                                </li>
                            </ul>
                        </li>
                        <li className="hide--md primary-nav__link">
                            English (EN) | <a className="language__link icon--hide" href="https://cy.ons.gov.uk">Cymraeg
                            (CY)</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}