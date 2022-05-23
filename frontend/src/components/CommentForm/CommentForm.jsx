
const CommentForm = (props) => {
    

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

export default CommentForm;