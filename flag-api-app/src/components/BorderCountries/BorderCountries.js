import React from "react";
import classes from "./BorderCountries.module.css";
import CountryTab from "../UI/Buttons/CountryTab/CountryTab";

const borderCountries = (props) => {
  let borderData = <p>Data unavilable</p>;
  if (props.countryData.borders.length !== 0) {
    borderData = props.countryData.borders.map((borderCountry) => {
      return <CountryTab key={borderCountry} country={borderCountry} />;
    });
  }
  return (
    <div className={classes.BorderCountries}>
      <h3>Border Countries:</h3>
      {borderData}
    </div>
  );
};

export default borderCountries;
