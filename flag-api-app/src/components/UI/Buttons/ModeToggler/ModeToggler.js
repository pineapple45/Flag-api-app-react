import React from "react";
import classes from "./ModeToggler.module.css";

const ModeToggler = (props) => {
  const finalClasses = props.Dark
    ? [classes.Dark, props.class]
    : [classes.ModeToggler, props.class];

  function Toggler() {
    props.setDark(!props.Dark);
    console.log(props.Dark);
    document.body.classList.toggle("dark-theme");
    // const nav = document.getElementById("nav");
    // console.log(nav);
    // nav.classList.toggle("dark-theme");
  }

  return (
    <div
      onClick={Toggler}
      className={props.Dark ? classes.Dark : finalClasses.join(" ")}
    >
      <i className="far fa-moon"></i>
      <p>Dark Mode</p>
    </div>
  );
};

export default ModeToggler;
