// 2020, 7/30, am 9:30
// Google Map Feature
// usig only css style to modify its outlay

/*eslint eqeqeq:0*/

import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'; //需要 API Key
// not import {GoogleMapReact} from 'google-map-react';
import './Dapp.css'

//import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
// npm install react-google-maps

const LocationPin = ({t})=>(

    <div>
        <p className="pin-text">{t}</p>

    </div>


)


class Dapp extends Component {
    
    constructor(props){

        super(props);

        this.state =
        {
            center:{
                lat: 37.42,
                lng: -122.08
            },

            zoom: 16

        }
        
    }

    render(){

        return(
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys = {{key:'AIzaSyAAp2U6Cg3fgiJQkbc99p9P4aXZrsb6DIk'}}
                        defaultCenter = {this.state.center}
                        defaultZoom = {this.state.zoom}
                    
                    >
                        <LocationPin className = 'pin'
                            lat={37.42216}
                            lng={-122.08427}
                            t="KatesAPPLab"
                    
                        />
                    </GoogleMapReact>
                </div>

        )

    }
     
}

export default Dapp;


 
