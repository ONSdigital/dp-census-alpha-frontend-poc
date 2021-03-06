import React from 'react';
import '../../styles/App.css';
import {AlphaBanner} from "./AlphaBanner"
import {ONSBanner} from "./ONSBanner"
import {Taxonomy} from "./Taxonomy";

export class Header extends React.Component {

    render() {
        return <div>
            <header>
                <AlphaBanner/>
                <ONSBanner/>
            </header>
            <Taxonomy/>
        </div>
    }
}
