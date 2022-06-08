import React from "react";
import {useState } from "react";
import GoogleMap from "../../components/Map/Map";
import AddPost from "../../components/CommentForm/CommentForm";
import DisplayPost from "../../components/CommentForm/DisplayPost"
import {Link} from "react-router-dom";
import "./EpicHomePage.css";

const EpicHomePage = (props) => {
    const [entries, setEntries]= useState([{}])
  
  function addNewEntry(entry){
    let tempEntries = [entry, ...entries]
    setEntries(tempEntries)
  }
   
    
    
      return (
        <div >
        
          <h1>Welcome to Epic Landing Page </h1>
          <GoogleMap/>  
          <Link to ="/newBusiness">Add Business</Link>
          <div >
          <h2> Comment Section</h2>
          <AddPost addNewEntryProperty={addNewEntry}/>  
          </div>
          <DisplayPost parentEntries={entries}/>
          </div>
       
        
      );
    };

 
export default EpicHomePage;