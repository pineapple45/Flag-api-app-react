import React from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import classes from './SearchBar.module.css';
const SearchBar = () => {
    return <div className={classes.SearchBar}>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..."/>
    </div>
}

export default SearchBar;