import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = (props) => {

  const onChangeHandler = (e) => {
    const inputText = e.target.value.toLowerCase();
    props.handleInputSearch(inputText);
  }

  return (
    <div className={classes.SearchBar}>
      <i className="fas fa-search"></i>
      <input 
      type="text" 
      placeholder="Search for a country/capital/region..." 
      onChange= {(e) => onChangeHandler(e)}
      value = {props.value}
      />
    </div>
  );
};

export default SearchBar;
