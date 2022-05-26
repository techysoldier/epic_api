import React from "react";
import {useState } from "react";
import useAuth from "../../hooks/useAuth";
import GoogleMap from "../../components/Map/Map";
import CommentList from "../../components/CommentForm/CommentList copy"


const EpicHomePage = (props) => {
    const [user, token] = useAuth();
    const [search, setSearch] = useState([]);
    
   
    
    
      return (
        <div >
          
          <h1>Welcome to Epic Landing Page </h1>
          <GoogleMap/>     
          <CommentList/>
       
          

        </div>
      );
    };

 
export default EpicHomePage;