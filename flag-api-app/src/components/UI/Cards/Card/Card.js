import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  // console.log("props", props);

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
        <h5>
          <span className={classes.span1}>Population: </span>
          <span className={classes.span}>
            {numberWithCommas(props.country.population)}
          </span>{" "}
        </h5>
        <h5>
          <span className={classes.span1}>Region: </span>
          <span className={classes.span}>{props.country.region}</span>
        </h5>
        <h5>
          <span className={classes.span1}>Capital: </span>
          <span className={classes.span}>{props.country.capital}</span>
        </h5>
      </div>
    </div>
  );
};

export default Card;
