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
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/dp-census-alpha-frontend-poc/businessindustryandtrade"
                               aria-haspopup="true">Business, industry and trade</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/business?pageName=Business&rootName=Business, industry and trade">Business</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/changestobusiness?pageName=Changes to business&rootName=Business, industry and trade">Changes to business</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/constructionindustry?pageName=Construction industry&rootName=Business, industry and trade">Construction industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/itandinternetindustry?pageName=IT and internet industry&rootName=Business, industry and trade">IT and internet industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/internationaltrade?pageName=International trade&rootName=Business, industry and trade">International trade</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/manufacturingandproductionindustry?pageName=Manufacturing and
                                        production industry&rootName=Business, industry and trade">Manufacturing and
                                        production industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/retailindustry?pageName=Retail industry&rootName=Business, industry and trade">Retail industry</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/tourismindustry?pageName=Tourism industry&rootName=Business, industry and trade">Tourism industry</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/dp-census-alpha-frontend-poc/economy"
                               aria-haspopup="true">Economy</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/economicoutputandproductivity?pageName=Economic output and productivity&rootName=Economy">Economic output and productivity</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/dp-census-alpha-frontend-poc/tax/environmentalaccounts?pageName=Environmental
                                        accounts&rootName=Economy">Environmental
                                        accounts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/governmentpublicsectorandtaxes?pageName=Government, public sector and taxes&rootName=Economy">Government, public sector and taxes</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/grossdomesticproductgdp?pageName=Gross Domestic Product (GDP)">Gross Domestic Product (GDP)</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/dp-census-alpha-frontend-poc/tax/grossvalueaddedgva?pageName=Gross
                                        Value Added (GVA)&rootName=Economy">Gross
                                        Value Added (GVA)</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/inflationandpriceindices?pageName=Inflation and price indices&rootName=Economy">Inflation and price indices</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/investmentspensionsandtrusts?pageName=Investments, pensions and trusts&rootName=Economy">Investments, pensions and trusts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/dp-census-alpha-frontend-poc/tax/nationalaccounts?pageName=National
                                        accounts&rootName=Economy">National
                                        accounts</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1" href="/dp-census-alpha-frontend-poc/tax/regionalaccounts?pageName=Regional
                                        accounts&rootName=Economy">Regional
                                        accounts</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/dp-census-alpha-frontend-poc/employmentandlabourmarket"
                               aria-haspopup="true">Employment and labour market</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/peopleinwork?pageName=People in work&rootName=Employment and labour market">People in work</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/peoplenotinwork?pageName=People not in work&rootName=Employment and labour market">People not in work</a>
                                </li>
                            </ul>
                        </li>
                        <li className="primary-nav__item js-nav js-expandable">
                            <a className="primary-nav__link col col--md-8 col--lg-10" href="/dp-census-alpha-frontend-poc/peoplepopulationandcommunity"
                               aria-haspopup="true">People, population and community</a>
                            <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
                                aria-expanded="false" aria-label="submenu">
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/birthsdeathsandmarriages?pageName=Births, deaths and
                                        marriages&rootName=People, population and community">Births, deaths and
                                        marriages</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/crimeandjustice?pageName=Crime and justice&rootName=People, population and community">Crime and justice</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/ethnicity?pageName=Ethnicity&rootName=People, population and community">Ethnicity</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/educationandchildcare?pageName=Education and childcare&rootName=People, population and community">Education and childcare</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/elections?pageName=Elections&rootName=People, population and community">Elections</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/healthandsocialcare?pageName=Health and social care&rootName=People, population and community">Health and social care</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/householdcharacteristics?pageName=Household
                                        characteristics&rootName=People, population and community">Household
                                        characteristics</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/housing?pageName=Housing&rootName=People, population and community">Housing</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/leisureandtourism?pageName=Leisure and tourism&rootName=People, population and community">Leisure and tourism</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/personalandhouseholdfinances?pageName=Personal and household
                                        finances&rootName=People, population and community">Personal and household
                                        finances</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/populationandmigration?pageName=Population and migration&rootName=People, population and community">Population and migration</a>
                                </li>
                                <li className="primary-nav__child-item  js-expandable__child">
                                    <a className="primary-nav__child-link" tabIndex="-1"
                                       href="/dp-census-alpha-frontend-poc/tax/wellbeing?pageName=Well-being&rootName=People, population and community">Well-being</a>
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