import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"
import {SearchBar} from "../components/header/SearchBar";

export class TaxEconomyPage extends React.Component {

    render() {
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar shouldRedirectToSearch={true} performSearch={() => {
                }}/>
                <div className={"wrapper"}>
                    <div className={"font-size--14 margin-top--2 margin-bottom--2"}>Home > Economy
                    </div>
                    <h1 className={"area-profile-title-area padding-top--2 margin-bottom--4 margin-top--0"}>
                        <b>People, population and community</b></h1>
                    <p className={"font-size--18"}>
                        UK economic activity covering production, distribution, consumption and trade of goods and
                        services. Individuals, businesses, organisations and governments all affect the development of
                        the economy.

                    </p>

                    <div>
                        <ul className="col-wrap col-span--lg-thirds tiles__list margin-bottom">
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/economicoutputandproductivity?pageName=Economic output and
                                            productivity&rootName=Economy">Economic output and
                                            productivity<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Manufacturing, production and services indices (measuring total economic output)
                                        and productivity (measuring efficiency, expressed as a ratio of output to input
                                        over a given period of time, for example output per person per hour).</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/environmentalaccounts?pageName=Enviromental accounts&rootName=Economy">Environmental
                                            accounts<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Environmental accounts show how the environment contributes to the economy (for
                                        example, through the extraction of raw materials), the impacts that the economy
                                        has on the environment (for example, energy consumption and air emissions), and
                                        how society responds to environmental issues (for example, through taxation and
                                        expenditure on environmental protection). This site also hosts the development
                                        of natural capital accounts, more information is available in the Methodology
                                        section.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/governmentpublicsectorandtaxes?pageName=Government, public sector and
                                            taxes&rootName=Economy">Government, public sector and
                                            taxes<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>How the relationship between UK public sector income (including taxes) and
                                        expenditure (both on investment and on the day-to-day running of government)
                                        lead to changes in deficit and debt.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/grossdomesticproductgdp?pageName=Gross Domestic Product (GDP)&rootName=Economy">Gross
                                            Domestic Product (GDP)<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Estimates of GDP are released on a monthly and quarterly basis. Monthly estimates
                                        are released alongside other short-term economic indicators. The two quarterly
                                        estimates contain data from all three approaches to measuring GDP and are called
                                        the First quarterly estimate of GDP and the Quarterly National Accounts. Data
                                        sources feeding into the two types of releases are consistent with each
                                        other.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/grossvalueaddedgva?pageName=Gross Value Added
                                            (GVA)&rootName=Economy">Gross Value Added
                                            (GVA)<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Regional gross value added using production (GVA(P)) and income (GVA(I))
                                        approaches. Regional gross value added is the value generated by any unit
                                        engaged in the production of goods and services. GVA per head is a useful way of
                                        comparing regions of different sizes. It is not, however, a measure of regional
                                        productivity.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/inflationandpriceindices?pageName=Inflation
                                            and price indices&rootName=Economy">Inflation
                                            and price indices<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>The rate of inflation is the change in prices for goods and services over time.
                                        Measures of inflation and prices include consumer price inflation, producer
                                        price inflation and the House Price Index.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}
