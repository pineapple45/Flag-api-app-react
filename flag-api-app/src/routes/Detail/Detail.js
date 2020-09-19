import React, { Component } from 'react';
import Aux from '../../Auxilliary/Auxilliary';
import BackButton from '../../components/UI/Buttons/BackButton/BackButton';
import CountryData from '../../components/CountryData/CountryData';
import BorderCountries from '../../components/BorderCountries/BorderCountries';
import Loader from '../../components/UI/Loader/Loader';

class Detail extends Component {

    state = {
        countryData : null
    }
    componentDidMount(){
        const countryName = this.props.match.params.name;

        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(data => data.json())
            .then(countryData => {
                console.log(countryData[0])
                this.setState({ countryData: countryData[0] })
            })
            .catch(err => console.log(err))
    }

    render(){
        // const countryName = this.props.match.params.name;
        let loadedData = <Loader />
        if(this.state.countryData !== null){
            loadedData = (<Aux>
                <CountryData countryData = {this.state.countryData}/>
                <BorderCountries countryData = {this.state.countryData}/>
            </Aux>)
        }
        return(
            <Aux>
                <BackButton />
                {loadedData}
            </Aux>
        )
    }
}

export default Detail;