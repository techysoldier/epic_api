import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import {KEY} from '../localKey';
// // import axios from "axios";
// import Maps from "../../components/Map/Map";


const EpicHomePage = (props) => {
    const [user, token] = useAuth();
    const [search, setSearch] = useState([]);
    
   
    
    
      return (
        <div >
          
          <h1>Welcome to Epic Landing Page </h1>
          {/* <Maps/> */}
          
        </div>
      );
    };

 
export default EpicHomePage;