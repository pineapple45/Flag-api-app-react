import React, { Component } from "react";
import Card from "../Cards/Card/Card";
import classes from "./Cards.module.css";

class Cards extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countries: [],
  //   };
  // }

  //http get request will be handled here
  // componentDidMount() {
  //   console.log("CARDS CALLED");
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState(() => {
  //         return {
  //           countries: data,
  //         };
  //       });
  //     });
  // }

  render() {
    return (
      <div className={classes.Cards}>
        {this.props.countries.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </div>
    );
  }
}

export default Cards;
