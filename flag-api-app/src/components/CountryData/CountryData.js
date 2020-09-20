import React, { Component } from "react";
import classes from "./CountryData.module.css";

class countryData extends Component {
  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div
        className={
          this.props.Dark ? classes.DarkCountryData : classes.CountryData
        }
      >
        <img
          alt={this.props.countryData.name}
          src={this.props.countryData.flag}
          className={this.props.Dark ? classes.Darkimg : classes.img}
        />
        <div className={this.props.Dark ? classes.DarkBody : classes.Body}>
          <h2
            className={
              this.props.Dark
                ? classes.DarkcardBodyHeading
                : classes.cardBodyHeading
            }
          >
            {this.props.countryData.name}
          </h2>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Native Name:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.nativeName}
            </span>
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Population:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {numberWithCommas(this.props.countryData.population)}
            </span>{" "}
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Region:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.region}
            </span>
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Sub Region:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.subregion}
            </span>
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Capital:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.capital}
            </span>
          </h5>
          <br />
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Top Level Domain:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.topLevelDomain}
            </span>
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Currencies:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.currencies.map((currency, index) => {
                if (index === this.props.countryData.currencies.length - 1) {
                  return <span key={index}>{currency.name}</span>;
                }
                return <span key={index}>{currency.name}, </span>;
              })}
            </span>
          </h5>
          <h5>
            <span className={this.props.Dark ? classes.DarkKey : classes.Key}>
              Languages:{" "}
            </span>
            <span className={this.props.Dark ? classes.DarkVal : classes.Val}>
              {this.props.countryData.languages.map((lang, index) => {
                if (index === this.props.countryData.languages.length - 1) {
                  return <span key={index}>{lang.name}</span>;
                }
                return <span key={index}>{lang.name}, </span>;
              })}
            </span>
          </h5>
        </div>
      </div>
    );
  }
}

export default countryData;
