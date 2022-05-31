import React, { useState } from 'react';


const AddPost = (props) => {

    const [name, setName]=useState('');
    const [date, setDate] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        
        let newEntry = {
           name : name,
           post: post,
           date: date 
        };
        console.log(newEntry);
        props.addNewEntryproperty()
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name'value = {name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='post' value = {post} onChange={(event) => setPost(event.target.value) } />
            <label> Date </label>
            <input type ='date' value ={date} onChange={(event) => setDate(event.target.value)} />
            <button type = 'submit'>Post</button>
        </form>
        
    );
}

export default AddPost;