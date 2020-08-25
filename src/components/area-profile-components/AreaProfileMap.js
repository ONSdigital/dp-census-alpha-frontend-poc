import React, {useEffect, useRef} from 'react';
import '../../styles/App.css';
import mapboxgl from 'mapbox-gl';
import mapStyle from "../../assets/style.json"

export class AreaProfileMap extends React.Component {

    constructor(props) {
        super(props)
        this.mapContainer = React.createRef();
        this.state = {
            accessToken: 'pk.eyJ1IjoiZGFuZHdhbCIsImEiOiJja2JodjE3bnUwOTNvMnNwdmVpdWU2cXoxIn0.Zwhbvr7YGa2TAE4iNpV6aA',
            latitude: 50.849072,
            longitude: -1.234370,
            zoom: 10
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: mapStyle,
            center: [this.state.longitude, this.state.latitude],
            zoom: this.state.zoom,
            accessToken: this.state.accessToken,
        });
    }

    render() {
        console.log(this.mapContainer);
        return (<div ref={this.mapContainer} className="mapContainer"/>)
    }
}
