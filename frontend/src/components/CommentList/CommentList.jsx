import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentList = (props) => {
   const [commentList, setCommentList]= useState([])
   const [user, token] = useAuth()

   useEffect(()=> {
    const DisplayCommentList = async () => {
        try {
            // console.log(props.currentVideo.id.videoId)
            let response = await axios.get(`http://127.0.0.1:8000/api/video/${props.currentVideo.id}/`, {
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
        DisplayCommentList();
  
}, [token]);
    return (  
        <div>
            {/* {commentList.map((comment) => {
            return(
                <div>{comment}</div>
            )
        })} */}
        </div>
    );
}
 
export default CommentList;


