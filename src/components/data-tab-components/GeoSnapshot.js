import React from 'react';
import '../../styles/App.css'

export class GeoSnapshot extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        let linkOff = <button
            className="page-link btn btn--plain margin-left--0 padding-left--0 padding-top--0 padding-bottom--0 margin-top--0 margin-bottom--0 font-size--16"
            type="button"
            onClick={() => {
                this.props.changeStageTo("Areas");
            }
            }>See more <b>{this.props.area.name}</b> areas ({this.props.count})
        </button>
        let title = <a href={`/dp-census-alpha-frontend-poc/area-profile/${this.props.area.links.self.id}`}
                       className={"font-size--24"}><span>{this.props.area.name} - {this.props.area.hierarchy}</span></a>
        return (<div className={"custom-table-opt-box font-size--18"}>
            <p className={"margin-top--0 padding-top--0 padding-bottom--0"}>{title}</p>
            <p className={"font-size--18 padding-bottom--0 padding-top--0 margin-top--2 margin-bottom--0"}>[Generic
                description placeholder] A description sharing relevant information
                about the searched areas returned profile.</p>
            {linkOff}
        </div>)
    }
}
