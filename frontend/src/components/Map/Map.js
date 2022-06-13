
import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
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

const marker = {
  mapMarker: null,
  activeMarker: {},
  selectedPlace: {},
  showingInfoWindow: false
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


// const infoWindow = () => {
//  let onMarkerClick = (props, marker) =>
//   this.setState({
//       activeMarker: marker,
//       selectedPlace: props,
//       showingInfoWindow: true
//   });

// let onInfoWindowClose = () =>
//   this.setState({
//       activeMarker: null,
//       showingInfoWindow: false
//   });

//  let onLoad = Marker => {
//   this.setState({
//     Marker
//   });
// };
// return infoWindow();

// }

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
    {/* {Marker && (
        <infoWindow
            anchor={Marker}
            position={{
              lat: data.latitude,
              lng: data.longitude
            }}  
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div style={{ background: "white" }}>
              {"custom Infobox: " + data.id}
            </div> */}
      <></> 
      {/* </infoWindow> */}
    {/* )} */}
    </GoogleMap>
  </LoadScript>
  )
   
      }
    
export default CreateMarker;