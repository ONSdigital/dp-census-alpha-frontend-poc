import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"
import {SearchBar} from "../components/header/SearchBar";

export class TaxPeoplePage extends React.Component {

    render() {
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar shouldRedirectToSearch={true} performSearch={() => {
                }}/>
                <div className={"wrapper"}>
                    <div className={"font-size--14 margin-top--2 margin-bottom--2"}>Home > People, population and
                        community
                    </div>
                    <h1 className={"area-profile-title-area padding-top--2 margin-bottom--4 margin-top--0"}>
                        <b>People, population and community</b></h1>
                    <p className={"font-size--18"}>
                        People living in the UK, changes in the population, how we spend our money, and data on crime,
                        relationships, health and religion. These statistics help us build a detailed picture of how we
                        live.

                    </p>

                    <div>
                        <ul className="col-wrap col-span--lg-thirds tiles__list margin-bottom">
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/peoplepopulationandcommunity/birthsdeathsandmarriages">Births, deaths
                                            and
                                            marriages<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>Life events in the UK including fertility rates, live
                                        births and stillbirths,
                                        family
                                        composition, life expectancy and deaths. This tells us about the health and
                                        relationships of the population.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/peoplepopulationandcommunity/crimeandjustice">Crime and justice<span
                                            className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>Figures on crime levels and trends for England and
                                        Wales based primarily on two
                                        sets
                                        of statistics: the Crime Survey for England and Wales (CSEW) and police recorded
                                        crime data.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/ethnicity?pageName=Ethnicity&rootName=People, population and community/">Ethnicity<span
                                            className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>How people in the UK see themselves today in terms of
                                        ethnicity, sexual identity,
                                        religion and language, and how this has changed over time. We use a diverse
                                        range of
                                        sources for this data.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/peoplepopulationandcommunity/educationandchildcare">Education and
                                            childcare<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>Early years childcare, school and college education,
                                        and higher education and
                                        adult
                                        learning, including qualifications, personnel, and safety and well-being. </p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/peoplepopulationandcommunity/elections">Elections<span
                                            className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>Analysis of the number of people registered to vote,
                                        including comparisons over
                                        time
                                        and between the UK constituent countries.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/peoplepopulationandcommunity/healthandsocialcare">Health and social
                                            care<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p className={"font-size--18"}>Life expectancy and the impact of factors such as
                                        occupation, illness and drug
                                        misuse. We collect these statistics from registrations and surveys. </p>
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
