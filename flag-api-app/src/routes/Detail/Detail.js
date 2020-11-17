import React, { Component } from "react";
import Aux from "../../Auxilliary/Auxilliary";
import BackButton from "../../components/UI/Buttons/BackButton/BackButton";
import CountryData from "../../components/CountryData/CountryData";
// import BorderCountries from "../../components/BorderCountries/BorderCountries";
import Loader from "../../components/UI/Loader/Loader";

class Detail extends Component {
  state = {
    countryData: null,
    cases: null
  };
  componentDidMount() {
    // console.log(this.props.location.props.cases,"CASES")
    const countryName = this.props.match.params.name;
    // const name = JSON.stringify(countryName)
    if(countryName in this.props.location.props.cases) {
      // console.log(countryName,"name")
      // console.log()
      this.setState(() => {
        return {
          cases: this.props.location.props.cases[countryName].All
        }
      })
    } else console.log("false")
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((data) => data.json())
      .then((countryData) => {
        // console.log(countryData[0]);
        this.setState({ countryData: countryData[0] });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // const countryName = this.props.match.params.name;
    let loadedData = <Loader />;
    if (this.state.countryData !== null) {
      loadedData = (
        <Aux>
          <CountryData
            Dark={this.props.Dark}
            countryData={this.state.countryData}
            cases={this.state.cases}
          />
          {/* <BorderCountries countryData={this.state.countryData} /> */}
        </Aux>
      );
    }
    return (
      <Aux>
        <BackButton position={this.props.location.props.position} Dark={this.props.Dark} />
        {loadedData}
      </Aux>
    );
  }
}

export default Detail;
