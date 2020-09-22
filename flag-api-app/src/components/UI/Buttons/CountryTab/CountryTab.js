import React from "react";
import classes from "./CountryTab.module.css";
import { Link } from "react-router-dom";

const countryTab = (props) => {
  return (
    <Link className={props.Dark ? classes.CountryTab : classes.DarkCountryTab}>
      {props.country}
    </Link>
  );
};

export default countryTab;
