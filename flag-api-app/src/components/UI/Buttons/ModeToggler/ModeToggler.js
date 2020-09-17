import React from 'react';
import classes from './ModeToggler.module.css';

const ModeToggler = (props) => {
    const finalClasses = [classes.ModeToggler,props.class];
    return <div className={finalClasses.join(' ')}>
        <i className="far fa-moon"></i>
        <p>Dark Mode</p>
    </div>
}

export default ModeToggler;