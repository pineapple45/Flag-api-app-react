import React from 'react';
import classes from './BackButton.module.css';
import { Link } from 'react-router-dom';

const backButton = () => {
    return(
    <Link to="/" className={classes.BackButton}>
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
    </Link>)
}

export default backButton;