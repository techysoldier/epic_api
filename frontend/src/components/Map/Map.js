//Billing error on rerfactored code + shows map 
// also gives this page cant load google maps properly

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {KEY} from '../../localKey'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 27.94,
  lng: -82.461
};

function MyComponent(props) {
  return (
    <LoadScript
      googleMapsApiKey={KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      position={center}
    />
      <Marker
      position={{ lat: 27.96, lng: -82.464 }}
    />
     <Marker
      position={{ lat: 27.95, lng: -82.45}}
    />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)



