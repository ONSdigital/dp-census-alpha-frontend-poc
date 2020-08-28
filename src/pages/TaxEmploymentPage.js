import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"
import {SearchBar} from "../components/header/SearchBar";

export class TaxEmploymentPage extends React.Component {

    render() {
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar shouldRedirectToSearch={true} performSearch={() => {
                }}/>
                <div className={"wrapper"}>
                    <div className={"font-size--14 margin-top--2 margin-bottom--2"}>Home > Employment and labour market
                    </div>
                    <h1 className={"area-profile-title-area padding-top--2 margin-bottom--4 margin-top--0"}>
                        <b>Employment and labour market</b></h1>
                    <p className={"font-size--18"}>
                        People in and out of work covering employment, unemployment, types of work, earnings, working
                        patterns and workplace disputes.
                    </p>

                    <div>
                        <ul className="col-wrap col-span--lg-thirds tiles__list margin-bottom">
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/peopleinwork?pageName=People in work&rootName=Employment and labour market">People
                                            in work<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Employment data covering employment rates, hours of work and earnings.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/peoplenotinwork?pageName=People not in work&rootName=Employment and labour market">People
                                            not in work<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Unemployed and economically inactive people in the UK including claimants of
                                        out-of-work benefits and the number of redundancies.
                                    </p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0">
                                <div className=" js-hover-click height--31 background--mercury print--hide"
                                     style={{position: "relative"}}>
                                    <div className="box__image padding-top--16 padding-right--1 padding-left--1">
                                        <h3 className="flush"><a href="#">Looking for local
                                            statistics?<span className="image-holder height--14"><img
                                                src="/img/t1-local.png" alt="" className="no-border"/></span><span
                                                className="box__clickable"/></a></h3>
                                        <p className="box__content flush">A handy guide to let you know where to find
                                            local statistics.</p>
                                    </div>
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
