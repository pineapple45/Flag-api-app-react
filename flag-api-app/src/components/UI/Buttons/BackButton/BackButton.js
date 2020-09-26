import React from "react";
import classes from "./BackButton.module.css";
import { Link } from "react-router-dom";

const backButton = (props) => {
  let classList = [classes.BackButton];
  props.Dark ? classList.push(classes.DarkBackButton) : classList = [classes.BackButton];

  return (
    <Link to="/" className={classList.join(' ')}>
      <i className="fas fa-long-arrow-alt-left"></i>
      Back
    </Link>
  );
};

export default backButton;
