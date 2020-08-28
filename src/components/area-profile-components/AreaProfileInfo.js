import React from 'react';
import '../../styles/App.css';
import * as MathHelpers from "../../helpers/Mathamatics";
import * as TextHelpers from "../../helpers/Text";
import {AreaProfileMap} from "./AreaProfileMap";
import {AreaProfileTabArea} from "./AreaProfileTabArea";


export class AreaProfileInfo extends React.Component {

    constructor(props){
        super(props)
        this.randomPopulation = TextHelpers.numberToFormattedString(MathHelpers.randomIntBetween(500, 9000000));
        this.popDirection = (MathHelpers.randomIntBetween(0, 5) === 0) ? "decrease" : "increase";
        this.popChangePercentage = MathHelpers.randomIntBetween(1, 25);
        this.changeDescRand = MathHelpers.randomIntBetween(0, 4);
        this.changeDesc = this.getComparisonDescription(this.changeDescRand);
        this.popDensity = MathHelpers.randomBetween(2, 70).toFixed(1);
        this.popDensityDescRand = MathHelpers.randomIntBetween(0, 4);
        this.popDensityDesc = this.getComparisonDescription(this.popDensityDescRand);
        this.houseOwn = MathHelpers.randomIntBetween(0, 100);
        this.houseShared = MathHelpers.randomIntBetween(0, (100 - this.houseOwn));
        this.houseSocialRented = MathHelpers.randomIntBetween(0, (100 - (this.houseOwn + this.houseShared)));
        this.housePrivateRented = MathHelpers.randomIntBetween(0, (100 - (this.houseOwn + this.houseShared + this.houseSocialRented)));
        this.houseOther = 100 - (this.houseOwn + this.houseShared + this.houseSocialRented + this.housePrivateRented);
    }
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

        return (<div>
            <div className={"col--md-25 float-left"}>
                <p className={"font-size--16"}><b>Summary</b></p>
                <p className={"font-size--16"}>{this.props.areaProfile.name} had a
                    population of {TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[0].value)} on Census day 2021,
                    an {this.popDirection} of {this.popChangePercentage}% compared to 2011, which was {this.changeDesc} the average
                    change
                    across all {this.props.areaProfile.hierarchy}. Its population density was {this.popDensity} people per
                    hectare, {this.popDensityDesc} average.</p>
                <p className={"font-size--16"}>{this.houseOwn}% of households in {this.props.areaProfile.name} own their own
                    home, {this.houseShared}% are shared
                    ownership, {this.houseSocialRented}% are
                    socially rented, {this.housePrivateRented}% are privately rented and {this.houseOther}% have another
                    tenure.</p>
            </div>
            <AreaProfileMap coords={this.props.areaProfile.location.coordinates}/>
            <div className={"general-stats-area"}>
                <div className={"float-left margin-right--3"}>
                    <p className={"font-size--16"}>{this.props.areaProfile.statistics[0].header}</p>
                    <h1 className={"font-size--55 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[0].value)}</h1>
                </div>
                <div className={"float-left  margin-right--3"}>
                    <p className={"font-size--16"}>{this.props.areaProfile.statistics[1].header}</p>
                    <h1 className={"font-size--55 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[1].value)}</h1>
                </div>
                <div className={"float-left  margin-right--3"}>
                    <p  className={"font-size--16"}>{this.props.areaProfile.statistics[2].header}</p>
                    <h1 className={"font-size--55 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{this.props.areaProfile.statistics[2].value.toFixed(1)}%</h1>
                </div>
                <div className={"float-left margin-right--3"}>
                    <p  className={"font-size--16"}>{this.props.areaProfile.statistics[3].header}</p>
                    <h1 className={"font-size--55 font-weight-700 margin-top--1 margin-bottom--0 padding-top--0 padding-bottom--0"}>{TextHelpers.numberToFormattedString(this.props.areaProfile.statistics[3].value)}</h1>
                </div>
            </div>
            <div className={"clear-float"}>
            <AreaProfileTabArea datasets={this.props.areaProfile.datasets} visualisations={this.props.areaProfile.visualisation} datasetSearchResults={this.props.datasetSearchResults}/>
            </div>
        </div>)
    }
}
