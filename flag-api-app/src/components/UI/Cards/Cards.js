import React from "react";
import Card from "../Cards/Card/Card";
import classes from "./Cards.module.css";

const cards = (props) => {
  const toggler = props.Dark;
  return (
    <div className={classes.Cards}>
      {props.countries.map((country) => (
        <Card Dark={toggler} country={country} key={country.name} />
      ))}
    </div>
  );
};

export default cards;
