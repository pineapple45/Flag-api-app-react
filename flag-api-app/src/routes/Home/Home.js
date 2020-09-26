import React, { Component } from "react";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import DropDown from "../../components/UI/Dropdown/Dropdown";
import Aux from "../../Auxilliary/Auxilliary";
import Cards from "../../components/UI/Cards/Cards";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filteredCountries: [],
    };
  }

  handleInputSearch = (inputText) => {
    this.setState((prevState) => {
      return {
        filteredCountries: prevState.countries.filter(
          (x) =>
            x.name.toLowerCase().indexOf(inputText) !== -1 ||
            x.region.toLowerCase().indexOf(inputText) !== -1 ||
            x.capital.toLowerCase().indexOf(inputText) !== -1
        ),
      };
    });
  };

  handleFiltering = (region) => {
    this.setState((prevState) => {
      return {
        filteredCountries: prevState.countries.filter(
          (x) => x.region === region
        ),
      };
    });
    document.getElementById("filter_value").innerHTML = region;
  };

  //http get request will be handled here
  componentDidMount() {
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
        <SearchBar
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          handleInputSearch={this.handleInputSearch}
        />
        <DropDown
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          handleFiltering={this.handleFiltering}
        />
        <Cards
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          countries={this.state.filteredCountries}
        />
      </Aux>
    );
  }
}

export default Home;
