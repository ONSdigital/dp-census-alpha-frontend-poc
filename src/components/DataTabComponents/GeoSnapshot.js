import React from 'react';
import '../../styles/App.css';

export class GeoSnapshot extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        let linkOff = <a href={"#"}><span>See more <b>{this.props.area.name}</b> areas ({this.props.count})</span></a>
        let title = <a href={"#"}
                       className={"font-size--20"}><span>{this.props.area.name} - {this.props.area.hierarchy}</span></a>
        return (<div className={"custom-table-opt-box font-size--18"}>
            <p>{title}</p>
            <b>{this.props.area.name}</b>
            <p className={"font-size--18"}>[Generic description placeholder] A description sharing relevant information
                about the searched areas returned profile.</p>
            {linkOff}
        </div>)
    }
}
