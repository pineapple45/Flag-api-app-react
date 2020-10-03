import React from "react";
import classes from "./CountryTab.module.css";
import { Link } from "react-router-dom";

const countryTab = (props) => {
  let classList = [classes.CountryTab];
  props.Dark ? classList.push(classes.DarkCountryTab) : classList = [classes.CountryTab];

  return (
    <Link className={classList.join(' ')}>
      {props.country}
    </Link>
  );
};

export default countryTab;
