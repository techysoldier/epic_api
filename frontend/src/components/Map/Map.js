//Billing error on rerfactored code + shows map 
// also gives this page cant load google maps properly

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {KEY} from '../../localKey'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
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
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)



