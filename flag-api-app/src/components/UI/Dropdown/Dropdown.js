import React, {useState} from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Dropdown.module.css';
const Dropdown = (props) => {
    const [isActive, setActive] = useState(false)

    const toggleDropDown = () => {
        setActive(!isActive);
    }

    return(
        <Aux>
        <Backdrop 
        show={isActive} 
        clicked={toggleDropDown}    
        />
        <div onClick={toggleDropDown} className={classes.Dropdown}>
            <div className={classes.Label}>
                <p>Filter by Region</p>
                <i className="fas fa-angle-down"></i>
            </div>
            <div 
            className={classes.Selection}
            style={{display: isActive ? 'block':'none'}}>
                <ul>
                    <li onClick={props.selectedCountry('africa')}>Africa</li>
                    <li onClick={props.selectedCountry('america')}>America</li>
                    <li onClick={props.selectedCountry('asia')}>Asia</li>
                    <li onClick={props.selectedCountry('europe')}>Europe</li>
                    <li onClick={props.selectedCountry('oceania')}>Oceania</li>
                </ul>
            </div>
        </div>
        </Aux>
    )    
}

export default Dropdown;