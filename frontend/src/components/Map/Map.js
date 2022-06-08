//Billing error on rerfactored code + shows map 
// also gives this page cant load google maps properly

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
        position={{lat: data.latitude , lng: data.longitude}} />
        </p>
      ))}
    
      <></> 
    </GoogleMap>
  </LoadScript>
  )
   
      }
    
export default CreateMarker;