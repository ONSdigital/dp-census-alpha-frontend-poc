import React from 'react';
import '../../styles/App.css';
import censusLogo from "../../assets/Census2021_whiteback.png";

export class ONSBanner extends React.Component {

    render() {
        return <header>
            <div className="wrapper">
                <div className="header col-wrap">
                    <div className="col">
                        <a
                            href="http://99.80.12.125/dp-census-alpha-frontend-poc">
                            <img className="logo top-logo"
                                 src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"
                                 alt="Office for National Statistics"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </header>
    }
}