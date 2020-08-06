import React from 'react';
import '../styles/App.css';
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"
import {SearchBar} from "../components/header/SearchBar";

export class Homepage extends React.Component {

    render() {
        return <div>
            <Header/>
            <SearchBar/>
            <div className={"missing-page-homepage"}>[HOMEPAGE]</div>
            <Footer/>
        </div>
    }
}
