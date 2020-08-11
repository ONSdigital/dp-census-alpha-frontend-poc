import React from 'react';
import '../../styles/App.css';
import {Redirect} from "react-router";

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "searchString": this.props.searchString,
            "redirectToSearch": false
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    setSearchInput(value) {
        this.setState({"searchString": value})
    }

    handleSearch(e) {
        this.setState({"redirectToSearch": true}, () => {
            if (this.state.redirectToSearch) {
                if (!this.props.shouldRedirectToSearch) {
                    this.props.performSearch(this.state.searchString)
                }
            }

        });
    }

    render() {
        if (this.state.redirectToSearch) {
            if (this.props.shouldRedirectToSearch) {
                return <Redirect to={`/dp-census-alpha-frontend-poc/search?q=${this.state.searchString}`}/>
            }

        }
        return (
            <div className="search nav-search--hidden print--hide" id="searchBar">
                <div className="wrapper" role="search">
                    <form className="col-wrap search__form"
                          onSubmit={(e)=>{
                              e.preventDefault()
                              this.handleSearch(e);
                          }}>
                        <label className="search__label col col--md-23 col--lg-24 font-size--24 font-weight--bold"
                               htmlFor="nav-search">Search for data</label>
                        <input type="search" autoComplete="off" className="search__input col col--md-21 col--lg-32"
                               id="nav-search"
                               name="q"
                               value={this.state.searchString}
                               onChange={(ev) => this.setSearchInput(ev.target.value)}/>
                        <button type="button" className="search__button col--md-3 col--lg-3" id="nav-search-submit">
                            <span className="visuallyhidden">Search</span>
                            <span className="icon icon-search--light"/>
                        </button>
                    </form>
                </div>
            </div>)
    }
}