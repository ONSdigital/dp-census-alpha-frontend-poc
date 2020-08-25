import React from 'react';
import '../../styles/App.css';
import * as MathHelpers from "../../helpers/Mathamatics";
import * as TextHelpers from "../../helpers/Text";
import {AreaProfileMap} from "./AreaProfileMap";
import {AreaProfileTabArea} from "./AreaProfileTabArea";


export class AreaProfileInfo extends React.Component {

    getComparisonDescription(value) {
        switch (value) {
            // @formatter:off
            case 0: return "greatly lower than"; break;
            case 1: return "somewhat lower than"; break;
            case 2: return "on par with"; break;
            case 3: return "somewhat higher than"; break;
            case 4: return "greatly higher than"; break;
            // @formatter:on
        }
        return
    }

    render() {
        let randomPopulation = TextHelpers.numberToFormattedString(MathHelpers.randomIntBetween(500, 9000000));
        let popDirection = (MathHelpers.randomIntBetween(0, 5) === 0) ? "decrease" : "increase";
        let popChangePercentage = MathHelpers.randomIntBetween(1, 25);
        let changeDescRand = MathHelpers.randomIntBetween(0, 4);
        let changeDesc = this.getComparisonDescription(changeDescRand);
        let popDensity = MathHelpers.randomBetween(2, 70).toFixed(1);
        let popDensityDescRand = MathHelpers.randomIntBetween(0, 4);
        let popDensityDesc = this.getComparisonDescription(popDensityDescRand);
        let houseOwn = MathHelpers.randomIntBetween(0, 100);
        let houseShared = MathHelpers.randomIntBetween(0, (100 - houseOwn));
        let houseSocialRented = MathHelpers.randomIntBetween(0, (100 - (houseOwn + houseShared)));
        let housePrivateRented = MathHelpers.randomIntBetween(0, (100 - (houseOwn + houseShared + houseSocialRented)));
        let houseOther = 100 - (houseOwn + houseShared + houseSocialRented + housePrivateRented);
        return (<div>
            <div className={"col--md-25 float-left"}>
                <p className={"font-size--16"}><b>Summary</b></p>
                <p className={"font-size--16"}>{this.props.areaProfile.name} had a
                    population of {randomPopulation} on Census day 2021,
                    an {popDirection} of {popChangePercentage}% compared to 2011, which was {changeDesc} the average
                    change
                    across all {this.props.areaProfile.hierarchy}. Its population density was {popDensity} people per
                    hectare, {popDensityDesc} average.</p>
                <p className={"font-size--16"}>{houseOwn}% of households in {this.props.areaProfile.name} own their own
                    home, {houseShared}% are shared
                    ownership, {houseSocialRented}% are
                    socially rented, {housePrivateRented}% are privately rented and {houseOther}% have another
                    tenure.</p>
            </div>
            <AreaProfileMap coords={this.props.areaProfile.location.coordinates}/>
            <div className={"general-stats-area"}>
                <div className={"float-left margin-right--3"}>
                    <p className={"font-size--16"}>{this.props.areaProfile.statistics[0].header}</p>
                    <h1 className={"font-size--60 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[0].value)}</h1>
                </div>
                <div className={"float-left  margin-right--3"}>
                    <p className={"font-size--16"}>{this.props.areaProfile.statistics[1].header}</p>
                    <h1 className={"font-size--60 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[1].value)}</h1>
                </div>
                <div className={"float-left  margin-right--3"}>
                    <p  className={"font-size--16"}>{this.props.areaProfile.statistics[2].header}</p>
                    <h1 className={"font-size--60 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{this.props.areaProfile.statistics[2].value.toFixed(1)}%</h1>
                </div>
                <div className={"float-left margin-right--3"}>
                    <p  className={"font-size--16"}>{this.props.areaProfile.statistics[3].header}</p>
                    <h1 className={"font-size--60 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[3].value)}</h1>
                </div>
            </div>
            <div className={"clear-float"}>
            <AreaProfileTabArea datasets={this.props.areaProfile.datasets} visualisations={this.props.areaProfile.visualisation}/>
            </div>
        </div>)
    }
}
