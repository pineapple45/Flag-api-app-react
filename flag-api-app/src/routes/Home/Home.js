import React, { Component } from "react";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import DropDown from "../../components/UI/Dropdown/Dropdown";
import Aux from "../../Auxilliary/Auxilliary";
import Cards from "../../components/UI/Cards/Cards";
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    
    

    this.state = {
      countries: [],
      filteredCountries: [],
      position: 0
    };
  }




  handleInputSearch = (inputText) => {
    this.setState((prevState) => {
      return {
        filteredCountries: prevState.countries.filter(
          (x) =>
            x.name.toLowerCase().indexOf(inputText) !== -1 ||
            x.region.toLowerCase().indexOf(inputText) !== -1 ||
            x.capital.toLowerCase().indexOf(inputText) !== -1
        ),
      };
    });
  };

  handleFiltering = (region) => {
    this.setState((prevState) => {
      return {
        filteredCountries: prevState.countries.filter(
          (x) => x.region === region
        ),
      };
    });
    document.getElementById("filter_value").innerHTML = region;
  };

  //http get request will be handled here

  componentDidMount() {
   

    // if(this.props.location.props) {
    //   console.log("RPINTE",this.props.location.props.position) 
    //  }
    //console.log(this.props.position,"ADA")
    // let mounted = true; 
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log("DONE")
        this.setState(() => {
          return {
            countries: data,
            filteredCountries: data,
          };
        });
      });

      // if(this.props.location.props) {
      //   console.log("RPINTE",this.props.location.props.position) 
      //   window.scrollBy(0,this.props.location.props.position)
      //  }



      // this.props.location.position ? window.scrollTo(0, this.props.location.position)

    window.addEventListener("scroll", this.handleScroll, { passive: true });

   // window.scrollTo(0, 300);

  }

  componentDidUpdate() {
    if(this.props.location.props) {
      console.log("RPINTE",this.props.location.props.position) 
      window.scrollTo(0,this.props.location.props.position)
      this.props.location.props = null
     }
    //window.scrollTo(200,300)
  }


  handleScroll(event) {
    //console.log(this.state.position, "handleScroll");
    //console.log(event,"event")
    this.setState(() => {
      return {
        position: window.scrollY,
      };
    });
     console.log(this.state.position)
  }

  render() {
    return (
      <Aux>
        <SearchBar
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          handleInputSearch={this.handleInputSearch}
        />
        <DropDown
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          handleFiltering={this.handleFiltering}
        />
        <Cards
          position={this.state.position}
          Dark={this.props.Dark}
          setDark={this.props.setDark}
          countries={this.state.filteredCountries}
        />
      </Aux>
    );
  }
}

export default Home;
