import React, { useState } from "react";
import Aux from "../../../Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "../Dropdown/Dropdown.module.css";

const Dropdown = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleDropDown = () => {
    setActive(!isActive);
  };

  let classList = [classes.Dropdown];
  props.Dark  ? classList.push(classes.Dark) : classList = [classes.Dropdown];

  let darkClassList = [classes.Selection];
  props.Dark ? darkClassList.push(classes.DarkSelection) : darkClassList = [classes.Selection];

  return (
    <Aux>
      <Backdrop show={isActive} clicked={toggleDropDown} />
      <div
        onClick={toggleDropDown}
        className={classList.join(' ')}>
        <div className={classes.Label}>
          <p id="filter_value">Filter by Region</p>
          <i className="fas fa-angle-down"></i>
        </div>
        <div
          className={darkClassList.join(' ')}
          style={{ display: isActive ? "block" : "none" }}>
          <ul>
            <li onClick={() => props.handleFiltering("Africa")}>Africa</li>
            <li onClick={() => props.handleFiltering("Americas")}>Americas</li>
            <li onClick={() => props.handleFiltering("Asia")}>Asia</li>
            <li onClick={() => props.handleFiltering("Europe")}>Europe</li>
            <li onClick={() => props.handleFiltering("Oceania")}>Oceania</li>
          </ul>
        </div>
      </div>
    </Aux>
  );
};

export default Dropdown;
