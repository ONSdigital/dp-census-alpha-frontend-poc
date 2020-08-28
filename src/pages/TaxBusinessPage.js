import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"
import {SearchBar} from "../components/header/SearchBar";

export class TaxBusinessPage extends React.Component {

    render() {
        return <div className="page-container">
            <Header/>
            <div className="content">
                <SearchBar shouldRedirectToSearch={true} performSearch={() => {
                }}/>
                <div className={"wrapper"}>
                    <div className={"font-size--14 margin-top--2 margin-bottom--2"}>Home > Business, industry and trade
                    </div>
                    <h1 className={"area-profile-title-area padding-top--2 margin-bottom--4 margin-top--0"}>
                        <b>Business, industry and trade</b></h1>
                    <p className={"font-size--18"}>
                        Activities of businesses and industry in the UK, including data on the production and trade of
                        goods and services, sales by retailers, characteristics of businesses, the construction and
                        manufacturing sectors, and international trade.

                    </p>

                    <div>
                        <ul className="col-wrap col-span--lg-thirds tiles__list margin-bottom">
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/business?pageName=Business&rootName=Business, industry and trade">Business<span
                                            className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>UK businesses registered for VAT and PAYE with regional breakdowns, including
                                        data on size (employment and turnover) and activity (type of industry), research
                                        and development, and business services.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/changestobusiness?pageName=Changes to business&rootName=Business, industry and trade">Changes
                                            to business<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>UK business growth, survival and change over time. These figures are an informal
                                        indicator of confidence in the UK economy.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/constructionindustry?pageName=Construction industry&rootName=Business, industry and trade">Construction
                                            industry<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Construction of new buildings and repairs or alterations to existing properties
                                        in Great Britain measured by the amount charged for the work, including work by
                                        civil engineering companies. </p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/internationaltrade?pageName=International trade&rootName=Business, industry and trade">International
                                            trade<span
                                                className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Trade in goods and services across the UK's international borders, including
                                        total imports and exports, the types of goods and services traded and general
                                        trends in international trade. </p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/itandinternetindustry?pageName=IT and internet industry&rootName=Business, industry and trade">IT
                                            and internet
                                            industry<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>Internet sales by businesses in the UK (total value and as a percentage of all
                                        retail sales) and the percentage of businesses that have a website and broadband
                                        connection. These figures indicate the importance of the internet to UK
                                        businesses.</p>
                                </div>
                            </li>
                            <li className="col col--md-half col--lg-one-third background--mercury height--31-indented-ellipsis margin-top--0 margin-left-md--1 margin-bottom--2 padding-top--0 padding-right--0 padding-bottom--0 padding-left--0 js-hover-click"
                                style={{position: "relative"}}>
                                <div
                                    className="min-height--10 background--gallery padding-top--2 padding-left--1 padding-right--1">
                                    <h3 className="flush">
                                        <a href="/dp-census-alpha-frontend-poc/tax/manufacturingandproductionindustry?pageName=Manufacturing and production industry&rootName=Business, industry and trade">Manufacturing
                                            and production industry<span className="box__clickable"/></a>
                                    </h3>
                                </div>
                                <div
                                    className="box__content padding-top--1 padding-right--1 padding-bottom--1 padding-left--1 border-top--iron-sm border-top--iron-md">
                                    <p>UK manufacturing and other production industries (such as mining and quarrying,
                                        energy supply, water supply and waste management), including total UK production
                                        output, and UK manufactures' sales by product and industrial division, with EU
                                        comparisons.</p>
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
