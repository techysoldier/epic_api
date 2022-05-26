import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentList = (props) => {
   const [commentList, setCommentList]= useState('')
   const [user, token] = useAuth();

   useEffect(()=> {
    const DisplayCommentList = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/epic/${props.user}/`, {
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
    
function handleSubmit(event) {
  event.preventDefault();
  props.newComment();
  
  }


return(
<form  onSubmit={handleSubmit}>
  <div>
  <label>Your comment</label>
  <input type="text"  value={props.text} onChange={(event) => props.setText(event.target.value)}/>
</div>
<button  type='submit'>Add Comment</button>
</form>
)
}

        
export default CommentList;


