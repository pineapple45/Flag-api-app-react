import React, { Component } from 'react';
import classes from './CountryData.module.css';

class countryData extends Component{

    render(){

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
    return(
        <div className={classes.CountryData}>
            <img
            alt={this.props.countryData.name}
            src={this.props.countryData.flag}
            className={classes.img}
            />
            <div className={classes.Body}>
                <h2 className={classes.cardBodyHeading}>{this.props.countryData.name}</h2>
                <h5>
                    <span className={classes.Key}>Native Name: </span>
                    <span className={classes.Val}>{this.props.countryData.nativeName}</span>
                </h5>
                <h5>
                    <span className={classes.Key}>Population: </span>
                    <span className={classes.Val}>
                    {numberWithCommas(this.props.countryData.population)}
                    </span>{" "}
                </h5>
                <h5>
                    <span className={classes.Key}>Region: </span>
                    <span className={classes.Val}>{this.props.countryData.region}</span>
                </h5>
                <h5>
                    <span className={classes.Key}>Sub Region: </span>
                    <span className={classes.Val}>{this.props.countryData.subregion}</span>
                </h5>
                <h5>
                    <span className={classes.Key}>Capital: </span>
                    <span className={classes.Val}>{this.props.countryData.capital}</span>
                </h5>
                <br />
                <h5>
                    <span className={classes.Key}>Top Level Domain: </span>
                    <span className={classes.Val}>{this.props.countryData.topLevelDomain}</span>
                </h5>
                <h5>
                    <span className={classes.Key}>Currencies: </span>
                    <span className={classes.Val}>
                        {this.props.countryData.currencies.map((currency,index) => {
                            if(index === this.props.countryData.currencies.length - 1){
                                return <span key={index}>{currency.name}</span>
                            }
                            return <span key={index}>{currency.name}, </span>
                        })}
                    </span>
                </h5>
                <h5>
                    <span className={classes.Key}>Languages: </span>
                    <span className={classes.Val}>
                        {this.props.countryData.languages.map((lang,index) => {
                            if(index === this.props.countryData.languages.length - 1){
                                return <span key={index}>{lang.name}</span>
                            }
                            return <span key={index}>{lang.name}, </span>
                        })}
                    </span>
                </h5>
            </div>
        </div>
    )
    }
}

export default countryData;