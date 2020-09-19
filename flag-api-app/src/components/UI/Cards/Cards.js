import React, { Component } from "react";
import Card from "../Cards/Card/Card";
import classes from "./Cards.module.css";

class Cards extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countries: [],
  //   };
<<<<<<< HEAD
  // }

  // const fs = () => {
  //     setState({

  //     })
=======
>>>>>>> 36bfb5ce91935173d6ad9d39f23558a8ba8b6778
  // }

  //http get request will be handled here
  // componentDidMount() {
<<<<<<< HEAD
  //   // console.log("CARDS CALLED");
=======
  //   console.log("CARDS CALLED");
>>>>>>> 36bfb5ce91935173d6ad9d39f23558a8ba8b6778
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
