import React, {useState} from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import classes from './Dropdown.module.css';
const Dropdown = () => {
    const [isActive, setActive] = useState(false)

    const toggleDropDown = () => {
        setActive(!isActive);
    }

    return(
        <div onClick={toggleDropDown} className={classes.Dropdown}>
            <div className={classes.Label}>
                <p>Filter by Region</p>
                <i className="fas fa-angle-down"></i>
            </div>
            <div 
            className={classes.Selection}
            style={{display: isActive ? 'block':'none'}}>
                <ul>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
            </div>
        </div>
    )    
}

export default Dropdown;