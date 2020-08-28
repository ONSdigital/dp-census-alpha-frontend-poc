import React from 'react';
import '../../styles/App.css';
import mapboxgl from 'mapbox-gl';
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
            width: 100,
            height: 100
        });
        let fitArea = MathHelpers.getMinAndMaxCoordinates(this.props.coords)
        if (fitArea != null) {
            map.fitBounds(fitArea, {padding: 20})
        }
        map.on('load', () => {

            this.props.coords.forEach((coord, index) => {
                // hacky fix as some polygons are singular and not in a polygon list
                if (coord[0][0][0] == null) {
                    coord = [coord];
                }
                map.addSource(`maine-${index}`, {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates':
                            coord
                        }
                    }
                });
                map.addLayer({
                    'id': `maine-fill-${index}`,
                    'type': 'fill',
                    'source': `maine-${index}`,
                    'layout': {},
                    'paint': {
                        'fill-color': '#AA0',
                        'fill-opacity': 0.6
                    }
                });
            })

            this.setState({mapLoaded: true, map: map}, () => {

            });
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
