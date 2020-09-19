import React, { useState } from "react";
import Aux from "../../../Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "../Dropdown/Dropdown.module.css";

const Dropdown = (props) => {
  const [isActive, setActive] = useState(false);

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
        </div>
      </div>
    </Aux>
  );
};

export default Dropdown;
