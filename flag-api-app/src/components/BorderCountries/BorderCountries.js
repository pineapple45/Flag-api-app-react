import React from 'react';
import classes from './BorderCountries.module.css';
import CountryTab from '../UI/Buttons/CountryTab/CountryTab';

const borderCountries = (props) => {
    return(<div className={classes.BorderCountries}>
        <h5>
            <span className={classes.Key}>Border Countries: </span>
            {Array.from(props.countryData.borders).map(borderCountry => {
                return <CountryTab key={borderCountry} country={borderCountry} />
            })}
        </h5>
    </div>)
}

export default borderCountries;