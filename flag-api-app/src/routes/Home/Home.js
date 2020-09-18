import React from "react";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import DropDown from "../../components/UI/Dropdown/Dropdown";
import Aux from "../../Auxilliary/Auxilliary";
import Cards from "../../components/UI/Cards/Cards";

const home = () => {
  return (
    <Aux>
      <SearchBar />
      <DropDown />
      <Cards />
    </Aux>
  );
};

export default home;
