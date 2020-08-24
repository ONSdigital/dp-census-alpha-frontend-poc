import React, {useEffect, useRef} from 'react';
import '../../styles/App.css';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import mapStyle from "../../assets/style.json"


// const Map = ReactMapboxGl({
//     accessToken:
//         'pk.eyJ1IjoiZGFuZHdhbCIsImEiOiJja2JodjE3bnUwOTNvMnNwdmVpdWU2cXoxIn0.Zwhbvr7YGa2TAE4iNpV6aA',
//     center: [0, 0],
// });

export class AreaProfileMap extends React.Component {


    // mapContainerRef = null

    constructor(props) {
        super(props)
        this.mapContainer = React.createRef();
        this.state = {
            accessToken: 'pk.eyJ1IjoiZGFuZHdhbCIsImEiOiJja2JodjE3bnUwOTNvMnNwdmVpdWU2cXoxIn0.Zwhbvr7YGa2TAE4iNpV6aA',
            longitude: -125,
            latitude: 44,
            zoom: 4
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
