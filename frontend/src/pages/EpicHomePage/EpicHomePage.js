import React from "react";
import {useState } from "react";
import useAuth from "../../hooks/useAuth";
import GoogleMap from "../../components/Map/Map";
import AddPost from "../../components/CommentForm/CommentForm";
import DisplayPost from "../../components/CommentForm/DisplayPost"


const EpicHomePage = (props) => {
    const [user, token] = useAuth();
    const [search, setSearch] = useState([]);
    
   
    
    
      return (
        <div >
          
          <h1>Welcome to Epic Landing Page </h1>
          <GoogleMap/>  
          <AddPost/>   
          <DisplayPost/>
          
       
          

        </div>
      );
    };

 
export default EpicHomePage;