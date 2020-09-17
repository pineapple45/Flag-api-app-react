import React from 'react';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import DropDown from  '../../components/UI/Dropdown/Dropdown';
import Aux from '../../Auxilliary/Auxilliary';
const home = () => {
    return (
        <Aux>
            <SearchBar />
            <DropDown />
        </Aux>
    )
}

export default home;