import React from "react";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let classList = [classes.Card];
  props.Dark ? classList.push(classes.Dark) : classList = [classes.Card];

  let imgClassList = [classes.img];
  props.Dark ? imgClassList.push(classes.Darkimg) : imgClassList = [classes.img];

  let bodyClassList = [classes.CardBody];
  props.Dark ? bodyClassList.push(classes.DarkCardBody) : bodyClassList = [classes.CardBody];

  let headingClassList = [classes.CardBodyHeading];
  props.Dark ? headingClassList.push(classes.DarkcardBodyHeading) : headingClassList = [classes.CardBodyHeading];

  let valueClassList = [classes.Val];
  props.Dark ? valueClassList.push(classes.DarkVal) : valueClassList = [classes.Val];

  let keyClassList = [classes.Key];
  props.Dark ? keyClassList.push(classes.DarkKey) : keyClassList = [classes.Key];

  return (
    <NavLink
    to={{pathname: `/${props.country.name}`,props:{
         position:props.position
    }}}
      className={classList.join(' ')}
    >
      <div>
        <img
          alt={props.country.name}
          src={props.country.flag}
          className={classes.img}
        />
        <div className={classes.CardBody}>
          <h4
            className={headingClassList.join(' ')}
          >
            {props.country.name}
          </h4>
          <h5>
            <span className={keyClassList.join(' ')}>
              Population:{" "}
            </span>
            <span className={valueClassList.join(' ')}>
              {numberWithCommas(props.country.population)}
            </span>{" "}
          </h5>
          <h5>
            <span className={keyClassList.join(' ')}>
              Region:{" "}
            </span>
            <span className={valueClassList.join(' ')}>
              {props.country.region}
            </span>
          </h5>
          <h5>
            <span className={keyClassList.join(' ')}>
              Capital:{" "}
            </span>
            <span className={valueClassList.join(' ')}>
              {props.country.capital}
            </span>
          </h5>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
