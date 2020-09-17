import React from 'react';
import ModeToggler from '../UI/Buttons/ModeToggler/ModeToggler';
import classes from './Nav.module.css';


const nav = () => {
    return <nav className={classes.Nav}>
        <h2 className={classes.H2}>Where in the world?</h2>
        <ModeToggler class={classes.Toggler}/>
    </nav>
}

export default nav;