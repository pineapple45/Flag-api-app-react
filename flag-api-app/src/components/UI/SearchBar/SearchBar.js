import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  let inputText = null;
  console.log("searchbar", props.Dark);
  const onChangeHandler = (e) => {
    inputText = e.target.value.toLowerCase();
    props.handleInputSearch(inputText);
  };

  let classList = [classes.SearchBar];
  props.Dark ? classList.push(classes.Dark) : classList = [classes.SearchBar]; 

  return (
    <div className={classList.join(' ')}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country/capital/region..."
        onChange={(e) => onChangeHandler(e)}
        value={inputText}
      />
    </div>
  );
};

export default SearchBar;
