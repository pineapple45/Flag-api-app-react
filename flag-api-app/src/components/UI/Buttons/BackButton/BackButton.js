import React from "react";
import classes from "./BackButton.module.css";
import { Link } from "react-router-dom";

const backButton = (props) => {
  return (
    <Link to="/" className={props.Dark ? classes.Dark : classes.BackButton}>
      <i className="fas fa-long-arrow-alt-left"></i>
      Back
    </Link>
  );
};

export default backButton;
