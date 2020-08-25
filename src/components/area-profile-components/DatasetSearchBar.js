import React from 'react';
import '../../styles/App.css';
import {Redirect} from "react-router";

export class DatasetSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "searchString": this.props.searchString,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    setSearchInput(value) {
        this.setState({"searchString": value})
    }

    handleSearch(e) {
        this.props.performSearch(this.state.searchString)
    }

    render() {
        return (
            <div className="nav-search--hidden print--hide margin-bottom--4" id="searchBar">
                <div className="wrapper" role="search">
                    <form className=""
                          onSubmit={(e) => {
                              e.preventDefault()
                              this.handleSearch(e);
                          }}>
                        <input type="search" autoComplete="off" className="search__input in-page-search-input col col--md-21 col--lg-32"
                               id="nav-search"
                               name="q"
                               value={this.state.searchString}
                               onChange={(ev) => this.setSearchInput(ev.target.value)}
                               placeholder={"Find a dataset for this area"}/>
                            <button type="button" className="search__button col--md-3 col--lg-3 in-page-search-button" id="nav-search-submit">
                                <span className="visuallyhidden">Search</span>
                                <span className="icon icon-search--dark"/>
                            </button>
                    </form>
                </div>
            </div>
    )
    }
    }
