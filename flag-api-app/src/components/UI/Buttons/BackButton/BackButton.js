import React from 'react';
import classes from './BackButton.module.css';

const backButton = () => {
    return(<div className={classes.BackButton}>
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
    </div>)
}

export default backButton;