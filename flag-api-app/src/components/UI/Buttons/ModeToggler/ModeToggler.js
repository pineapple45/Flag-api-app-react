import React from "react";
import classes from "./ModeToggler.module.css";

const ModeToggler = (props) => {
  let finalClasses = props.Dark
    ? [classes.Dark, props.Darkclass]
    : [classes.ModeToggler, props.class];

  // const finalClasses = props.Dark
  //   ? [classes.Dark, props.class]
  //   : [classes.ModeToggler, props.class];

  function Toggler() {
    props.setDark(!props.Dark);
    console.log(props.Dark);
    document.body.classList.toggle("dark-theme");
    // const nav = document.getElementById("nav");
    // console.log(nav);
    // nav.classList.toggle("dark-theme");
  }

  return (
    <div onClick={Toggler} className={finalClasses.join(" ")}>
      <i className="far fa-moon"></i>
      <p>Dark Mode</p>
    </div>
  );
};

export default ModeToggler;
