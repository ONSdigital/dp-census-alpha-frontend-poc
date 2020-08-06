import React from 'react';
import '../../styles/App.css';

export class AreasTab extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        return <div>
            0 Results for Area containing ...
        </div>
    }
}
