import React, { Component } from "react";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import DropDown from "../../components/UI/Dropdown/Dropdown";
import Aux from "../../Auxilliary/Auxilliary";
import Cards from "../../components/UI/Cards/Cards";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);

    this.state = {
      countries: [],
      filteredCountries: [],
    };
  }

  handler(region) {
    this.setState((prevState) => {
      //let countries = prevState.countries;
      return {
        countries: prevState.filteredCountries.filter(
          (x) => x.region === region
        ),
      };
    });
  }

  //http get request will be handled here
  componentDidMount() {
    console.log("CARDS CALLED");
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            countries: data,
            filteredCountries: data,
          };
        });
      });
  }

  render() {
    return (
      <Aux>
        <SearchBar />
        <DropDown countries={this.state.countries} handler={this.handler} />
        <Cards countries={this.state.countries} />
      </Aux>
    );
  }
}

export default Home;
