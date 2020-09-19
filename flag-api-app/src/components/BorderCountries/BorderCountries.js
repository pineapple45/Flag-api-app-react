import React from 'react';
import classes from './BorderCountries.module.css';
import CountryTab from '../UI/Buttons/CountryTab/CountryTab';

const borderCountries = (props) => {
    return(
    <div className={classes.BorderCountries}>
            <h3>Border Countries:</h3>
            {
                props.countryData.borders.map(borderCountry => {
                return <CountryTab key={borderCountry} country={borderCountry} />
            })}
    </div>)
}

export default borderCountries;