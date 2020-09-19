import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <Link to={`/${props.country.name}`} className={classes.Card}>
      <div >
        <img
          alt={props.country.name}
          src={props.country.flag}
          className={classes.img}
        />
        <div className={classes.CardBody}>
          <h4 className={classes.cardBodyHeading}>{props.country.name}</h4>
          <h5>
            <span className={classes.Key}>Population: </span>
            <span className={classes.Val}>
              {numberWithCommas(props.country.population)}
            </span>{" "}
          </h5>
          <h5>
            <span className={classes.Key}>Region: </span>
            <span className={classes.Val}>{props.country.region}</span>
          </h5>
          <h5>
            <span className={classes.Key}>Capital: </span>
            <span className={classes.Val}>{props.country.capital}</span>
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
