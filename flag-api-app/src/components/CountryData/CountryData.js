import React, { Component } from "react";
import classes from "./CountryData.module.css";
import BorderCountries from "../BorderCountries/BorderCountries";

class countryData extends Component {
  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let bodyClassList = [classes.CardBody];
    this.props.Dark
      ? bodyClassList.push(classes.DarkCardBody)
      : (bodyClassList = [classes.CardBody]);

    let headingClassList = [classes.CardBodyHeading];
    this.props.Dark
      ? headingClassList.push(classes.DarkCardBodyHeading)
      : (headingClassList = [classes.CardBodyHeading]);

    let valueClassList = [classes.Val];
    this.props.Dark
      ? valueClassList.push(classes.DarkVal)
      : (valueClassList = [classes.Val]);

    let keyClassList = [classes.Key];
    this.props.Dark
      ? keyClassList.push(classes.DarkKey)
      : (keyClassList = [classes.Key]);

    return (
      <div className={classes.CountryData}>
        <img
          alt={this.props.countryData.name}
          src={this.props.countryData.flag}
          className={classes.img}
        />
        <div className={classes.Body}>
          <h2
            className={
              this.props.Dark
                ? classes.DarkcardBodyHeading
                : classes.CardBodyHeading
            }
          >
            {this.props.countryData.name}
          </h2>

          <div className={classes.Section_1}>
            <h5>
              <span className={keyClassList.join(" ")}>Native Name: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.nativeName}
              </span>
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Population: </span>
              <span className={valueClassList.join(" ")}>
                {numberWithCommas(this.props.countryData.population)}
              </span>{" "}
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Region: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.region}
              </span>
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Sub Region: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.subregion}
              </span>
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Capital: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.capital}
              </span>
            </h5>
          </div>

          <br />
          <div className={classes.Section_2}>
            <h5>
              <span className={keyClassList.join(" ")}>Top Level Domain: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.topLevelDomain}
              </span>
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Currencies: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.currencies.map((currency, index) => {
                  if (index === this.props.countryData.currencies.length - 1) {
                    return <span key={index}>{currency.name}</span>;
                  }
                  return <span key={index}>{currency.name}, </span>;
                })}
              </span>
            </h5>
            <h5>
              <span className={keyClassList.join(" ")}>Languages: </span>
              <span className={valueClassList.join(" ")}>
                {this.props.countryData.languages.map((lang, index) => {
                  if (index === this.props.countryData.languages.length - 1) {
                    return <span key={index}>{lang.name}</span>;
                  }
                  return <span key={index}>{lang.name}, </span>;
                })}
              </span>
            </h5>
          </div>
          <div className={classes.Section_3}>
            {this.props.cases && (
              <h5>
                <span className={keyClassList.join(" ")} id={classes.under}>
                  COVID 19
                </span>{" "}
                <br /> <br />
                <span className={keyClassList.join(" ")}>Confirmed: </span>
                <span className={valueClassList.join(" ")}>
                  {numberWithCommas(this.props.cases.confirmed)}
                </span>
                <br />
                <span className={keyClassList.join(" ")}>Recovered: </span>
                <span className={valueClassList.join(" ")}>
                  {numberWithCommas(this.props.cases.recovered)}
                </span>
                <br />
                <span className={keyClassList.join(" ")}>Deaths: </span>
                <span className={valueClassList.join(" ")}>
                  {numberWithCommas(this.props.cases.deaths)}
                </span>
                <br />
                <br />
                <span className={keyClassList.join(" ")}>Last Updated: </span>
                <span className={valueClassList.join(" ")}>
                  {new Date(this.props.cases.updated).toLocaleString("en-IN")}
                </span>
              </h5>
            )}
          </div>

          <BorderCountries countryData={this.props.countryData} />
        </div>
      </div>
    );
  }
}

export default countryData;
