import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  console.log("props", props);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <div className={classes.Card}>
      <img
        alt={props.country.name}
        src={props.country.flag}
        className={classes.img}
      />
      <div className={classes.CardBody}>
      <h4>{props.country.name}</h4>
      <h4>Population:- {numberWithCommas(props.country.population)} </h4>
      <h4>Region:- {props.country.region}</h4>
      <h4>Capital:- {props.country.capital}</h4>
      </div>
    </div>
  );
};

export default Card;
