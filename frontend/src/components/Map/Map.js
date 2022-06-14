//Billing error on rerfactored code + shows map 
// also gives this page cant load google maps properly

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox} from '@react-google-maps/api';
import {KEY} from '../../localKey'
import useAuth from "../../hooks/useAuth";
import axios from 'axios';


const containerStyle = {
  width: '600px',
  height: '300px'
};

const center = {
  lat: 27.94,
  lng: -82.461
};





const CreateMarker = () => {
  const [token] = useAuth();
  const [ data, setData] = useState([]);
  useEffect(() => {
  const getMarkerinfo = async () => {
    try{
      let response = await axios.get("http://127.0.0.1:8000/api/epic/businesses/", {
        headers: {
          Authorization: "Bearer" + token,
        }
      });
    let data = response.data 
    setData(data);
      
    } catch(error){
      console.log(error.message)
    }
  };
  getMarkerinfo();
  }, [token]);


  
  const options = { closeBoxURL: '/', enableEventPropagation: true };
  
  const onLoad = infoBox => {
    console.log('infoBox: ', infoBox)
  };


  
  return(
    <LoadScript
    googleMapsApiKey={KEY}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {data &&
      data.map((data) => (
        <p key = {data.latlng}>
        <Marker 
        position={{lat: data.latitude , lng: data.longitude}}
        label = {data.name}
       />
        </p>
      ))}
    <></> 


        {/* goal is to get the facility info on register business to the frontend info boxes */}
    <InfoBox
      onLoad={onLoad}
      options={options}
      position={{Marker}}
    >
      <div style={{ backgroundColor: 'white', opacity: 0.75, padding: 12, maxHeight: '169px' }}>
        <div style={{ fontSize: 10, fontColor: `#08233B` }}>
          Input facility info
        </div>
      </div>
    </InfoBox>
     <div id = 'ledgend'><h3>Legend</h3></div>
    </GoogleMap>
  </LoadScript>
  )
   
      }    
export default CreateMarker;

