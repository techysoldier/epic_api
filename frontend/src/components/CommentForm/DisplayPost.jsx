import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React from "react";


const DisplayComment= (props) => {
   const [commentList, setCommentList]= useState([])
   const [user, token] = useAuth()

   useEffect(()=> {
    const DisplayCommentList = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/epic/`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            }); 
            setCommentList(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        console.log(commentList)
        DisplayCommentList(commentList);
  
}, [token]);
    return (  
        <div>
            {commentList.map((comment) => {
            return(
                <div>{comment.location_id} {comment.text}</div>
                
            )
        })}
        </div>
    );
}
 


 
export default DisplayComment;