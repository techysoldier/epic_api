import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom"
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {KEY} from '../../localKey'
import { Marker } from "@react-google-maps/api";



let initialValues = {
  name:"",
  address:"",

};

const RegisterBusiness = () => {
  const navigate = useNavigate()
  const [user, token] = useAuth();
  const [formData, handleInputChange, handleSubmit] =useCustomForm(initialValues, postNewBusiness,)

async function postNewBusiness(){

  //make axios call to geocoding API to get lat/lng based on address from form
  
async function getCoordinates(){
  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formData.address}&key=${KEY}`) 
  console.log (response.data)
  let latLong = response.data.results[0].geometry.location 
 
  return{latLong};
 


}

let coordObject = await getCoordinates()
console.log('coordObject', coordObject)


//take lat/lng values off of coordObject, add each one to a property on formData

formData.latitude = coordObject.latLong.lat
formData.longitude = coordObject.latLong.lng
console.log('formData', formData)

//Goal for console log:
// {
//   'name': 'dfdsf',
//   'address': "sdfdsf",
//   'latitude': 23.44,
//   'longitude': 45.77
// }

try{
    let response = await axios.post("http://127.0.0.1:8000/api/epic/post_business/", formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response)
    navigate("/")
  }catch(error){
    console.log(error.response.data);

  }
}

useEffect(() => {
const getMarkerinfo = async () => {
  try{
    let response = await axios.get("http://127.0.0.1:8000/api/epic/businesses/", {
      headers: {
        Authorization: "Bearer" + token,
      }
    });

    console.log(response.data)
    
  } catch(error){
    console.log(error.message)
  }
};
getMarkerinfo();
}, [token]);



// const DisplayMarker = ({epic_business}) => {
//   const [marker,setMarker] = useState("Marker")
//   const displayMarker = [Marker]
//   const HandleButtonClick = (event) => {
//       event.preventDefault()
//       setMarker(displayMarker)
//       console.log(marker)
//   }

//   function generateMarker(){

//     let filteredLocations = epic_business.filter(name => name.[0]longitude);
//     filteredLocations = filteredLocations.sort((longitude) => {
//         return longitude
//     })
//     //Returns array
//     let allLocations = [...filteredLocations.map()]

//     console.log(allLocations)
 
//     let locationArrays = allLocations.map(LocationList =>{
//      return [LocationList.longitude, "silver"]
//     });

//  const data = [
//  ['Location', { role: "style" } ],
//      ...locationArrays
     
// ]
//  return data;
// }

// DisplayMarker()




return (

    <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              name:{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
            address:{" "}
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </label>
            <p style={{ fontSize: "12px" }}>
            </p>
            <button className="button">Register Business!</button>
          </form>
        </div>

      );
    };


export default RegisterBusiness;


