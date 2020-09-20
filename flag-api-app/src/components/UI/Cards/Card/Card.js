import React from "react";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <NavLink
      to={`/${props.country.name}`}
      className={props.Dark ? classes.Dark : classes.Card}
    >
      <div>
        <img
          alt={props.country.name}
          src={props.country.flag}
          className={props.Dark ? classes.Darkimg : classes.img}
        />
        <div className={props.Dark ? classes.DarkCardBody : classes.CardBody}>
          <h4
            className={
              props.Dark ? classes.DarkcardBodyHeading : classes.cardBodyHeading
            }
          >
            {props.country.name}
          </h4>
          <h5>
            <span className={props.Dark ? classes.DarkKey : classes.Key}>
              Population:{" "}
            </span>
            <span className={props.Dark ? classes.DarkVal : classes.Val}>
              {numberWithCommas(props.country.population)}
            </span>{" "}
          </h5>
          <h5>
            <span className={props.Dark ? classes.DarkKey : classes.Key}>
              Region:{" "}
            </span>
            <span className={props.Dark ? classes.DarkVal : classes.Val}>
              {props.country.region}
            </span>
          </h5>
          <h5>
            <span className={props.Dark ? classes.DarkKey : classes.Key}>
              Capital:{" "}
            </span>
            <span className={props.Dark ? classes.DarkVal : classes.Val}>
              {props.country.capital}
            </span>
          </h5>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
