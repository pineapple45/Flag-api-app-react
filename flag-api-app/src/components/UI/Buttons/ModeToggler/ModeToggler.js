import React from "react";
import classes from "./ModeToggler.module.css";

const ModeToggler = (props) => {
  let finalClasses = props.Dark
    ? [classes.Dark]
    : [classes.ModeToggler];

  function Toggler() {
    props.setDark(!props.Dark);
    document.body.classList.toggle("dark-theme");
  }

  return (
    <div onClick={Toggler} className={finalClasses.join(" ")}>
      <i className="far fa-moon"></i>
      <p>Dark Mode</p>
    </div>
  );
};

export default ModeToggler;
