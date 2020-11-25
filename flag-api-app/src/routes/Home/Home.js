import React, { Component } from "react";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import DropDown from "../../components/UI/Dropdown/Dropdown";
import Aux from "../../Auxilliary/Auxilliary";
import Cards from "../../components/UI/Cards/Cards";
import Loader from "../../components/UI/Loader/Loader";
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      countries: [],
      filteredCountries: [],
      position: 0,
      cases: [],
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

  handleScroll() {
    localStorage.setItem(
      "persistantData",
      JSON.stringify({
        position: window.scrollY,
        casesData: this.state.cases,
      })
    );

    this.setState(() => {
      return {
        ...this.state,
        position: window.scrollY,
      };
    });
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            ...this.state,
            countries: data,
            filteredCountries: data,
          };
        });
      });

    fetch(
      "https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            ...this.state,
            cases: data,
          };
        });
      });

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    localStorage.setItem(
      "persistantData",
      JSON.stringify({
        position: this.state.position,
        casesData: this.state.cases,
      })
    );
  }

  componentDidUpdate() {
    let persistantData = JSON.parse(localStorage.getItem("persistantData"));
    if (this.props.location.props) {
      window.scrollTo(0, this.props.location.props.position);
      this.props.location.props = null;
    } else {
      if (persistantData) {
        window.scrollTo(0, persistantData.position);
      }
    }
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
        {this.state.countries.length !== 0 ? (
          <Cards
            position={this.state.position}
            Dark={this.props.Dark}
            setDark={this.props.setDark}
            countries={this.state.filteredCountries}
            //cases={this.state.cases}
          />
        ) : (
          <Loader />
        )}
      </Aux>
    );
  }
}

export default Home;
