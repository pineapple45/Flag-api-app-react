import React from "react";
import ModeToggler from "../UI/Buttons/ModeToggler/ModeToggler";
import classes from "./Nav.module.css";

const nav = (props) => {
  //   if (toggle) {
  //     document.getElementsByTagName("nav").className = "dark-theme";
  //     // console.log(document.getElementsByTagName("nav").className);
  //   }
  return (
    <nav className={props.Dark ? classes.Dark : classes.Nav}>
      <h2 className={classes.H2}>Where in the world?</h2>
      <ModeToggler
        Dark={props.Dark}
        setDark={props.setDark}
        class={classes.Toggler}
        Darkclass={classes.DarkToggler}
      />
    </nav>
  );
};

export default nav;
