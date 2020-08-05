import React from 'react';
import '../styles/App.css';
import {AlphaBanner} from "../components/header/AlphaBanner"
import {Header} from "../components/header/Header"
import {Footer} from "../components/footer/Footer"

export class Homepage extends React.Component {

    render() {
        return <div>
            <Header/>
            <div className={"homepage"}>[HOMEPAGE]</div>
            <Footer/>
        </div>
    }
}
