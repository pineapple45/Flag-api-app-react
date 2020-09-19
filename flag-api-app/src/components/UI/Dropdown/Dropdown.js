<<<<<<< HEAD
import React, { useState } from "react";
import Aux from "../../../Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "../Dropdown/Dropdown.module.css";
=======
import React, {useState} from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Dropdown.module.css';
const Dropdown = (props) => {
    const [isActive, setActive] = useState(false)
>>>>>>> 36bfb5ce91935173d6ad9d39f23558a8ba8b6778

const Dropdown = (props) => {
  const [isActive, setActive] = useState(false);

<<<<<<< HEAD
  const toggleDropDown = () => {
    setActive(!isActive);
  };

  function selectRegion(region) {
    console.log(region);
    document.getElementById("filter_value").innerHTML = region;
    props.handler(region);
    //console.log(props.countries);
  }

  return (
    <Aux>
      <Backdrop show={isActive} clicked={toggleDropDown} />
      <div onClick={toggleDropDown} className={classes.Dropdown}>
        <div className={classes.Label}>
          <p id="filter_value">Filter by Region</p>
          <i className="fas fa-angle-down"></i>
        </div>
        <div
          className={classes.Selection}
          style={{ display: isActive ? "block" : "none" }}
        >
          <ul>
            <li onClick={() => selectRegion("Africa")}>Africa</li>
            <li onClick={() => selectRegion("Americas")}>Americas</li>
            <li onClick={() => selectRegion("Asia")}>Asia</li>
            <li onClick={() => selectRegion("Europe")}>Europe</li>
            <li onClick={() => selectRegion("Oceania")}>Oceania</li>
          </ul>
=======
    return(
        <Aux>
        <Backdrop 
        show={isActive} 
        clicked={toggleDropDown}    
        />
        <div onClick={toggleDropDown} className={classes.Dropdown}>
            <div className={classes.Label}>
                <p>Filter by Region</p>
                <i className="fas fa-angle-down"></i>
            </div>
            <div 
            className={classes.Selection}
            style={{display: isActive ? 'block':'none'}}>
                <ul>
                    <li onClick={props.selectedCountry('africa')}>Africa</li>
                    <li onClick={props.selectedCountry('america')}>America</li>
                    <li onClick={props.selectedCountry('asia')}>Asia</li>
                    <li onClick={props.selectedCountry('europe')}>Europe</li>
                    <li onClick={props.selectedCountry('oceania')}>Oceania</li>
                </ul>
            </div>
>>>>>>> 36bfb5ce91935173d6ad9d39f23558a8ba8b6778
        </div>
      </div>
    </Aux>
  );
};

export default Dropdown;
