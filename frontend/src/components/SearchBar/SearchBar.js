import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    function handleSubmit (event){
        event.preventDefault()
        props.getSearchResult()
    } 
    return (
       
        <form onSubmit={handleSubmit}>
        <input className="Input" onChange= {(event) => props.setName(event.target.value)} type="search"/>
        <button className="Submit" type="submit">Search</button>
        </form> 
       
      );
}
 
export default SearchBar;