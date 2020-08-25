import React, {useEffect, useRef} from 'react';
import '../../styles/App.css';
import mapboxgl from 'mapbox-gl';
import mapStyle from "../../assets/style.json"
import * as MathHelpers from "../../helpers/Mathamatics";


export class AreaProfileMap extends React.Component {

    constructor(props) {
        super(props)
        this.mapContainer = React.createRef();
        this.state = {
            accessToken: 'pk.eyJ1IjoiZGFuZHdhbCIsImEiOiJja2JodjE3bnUwOTNvMnNwdmVpdWU2cXoxIn0.Zwhbvr7YGa2TAE4iNpV6aA',
            latitude: 50.849072,
            longitude: -1.234370,
            zoom: 9,
            mapLoaded: false
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: mapStyle,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.state.longitude, this.state.latitude],
            zoom: this.state.zoom,
            accessToken: this.state.accessToken,
            width:100,
            height:100
        });
        let fitArea = MathHelpers.getMinAndMaxCoordinates(this.props.coords)
        if (fitArea != null) {
            map.fitBounds(fitArea, {padding: 60})
        }
        map.on('load', () => {
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                this.props.coords[0]
                            ]
                        ]
                    }
                }
            });
            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'fill-color': '#088',
                    'fill-opacity': 0.8
                }
            });
            this.setState({mapLoaded: true});
        });
    }


    render() {
        return (
            <div className="mapContainer col--md-30">
                <div ref={this.mapContainer} className={"map-main"}/>
            </div>
        )
    }

    static defaultProps = {
        coords: [[[]]],
    }
}
