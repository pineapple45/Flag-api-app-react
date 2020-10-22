import React from "react";
import Card from "../Cards/Card/Card";
import classes from "./Cards.module.css";

const cards = (props) => {
  return (
    <div className={classes.Cards}>
      {props.countries.map((country) => (
        <Card position={props.position} Dark={props.Dark} country={country} key={country.name} />
      ))}
    </div>
  );
};

export default cards;
