import React, {useState} from "react";


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    function handleSubmit(event){
        debugger
        event.preventDefault()
        props.getSearchResults(searchTerm)
    }

    return (  
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input type="text" placeholder="Search" onChange={(event) =>{setSearchTerm(event.target.value)}}/>
            
            <button type="submit">Search</button>
            
        </form>
    );
}
 
export default SearchBar;