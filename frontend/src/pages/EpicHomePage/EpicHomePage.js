import React from "react";
import {useState } from "react";
import GoogleMap from "../../components/Map/Map";
import AddPost from "../../components/CommentForm/CommentForm";
import DisplayPost from "../../components/CommentForm/DisplayPost"
import {Link} from "react-router-dom";

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
          <AddPost addNewEntryProperty={addNewEntry}/>   
          <DisplayPost parentEntries={entries}/>
          <Link to ="/newBusiness">Add Business</Link>
       
          

        </div>
      );
    };

 
export default EpicHomePage;