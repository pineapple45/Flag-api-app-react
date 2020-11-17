import React, { Component } from 'react';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import DropDown from '../../components/UI/Dropdown/Dropdown';
import Aux from '../../Auxilliary/Auxilliary';
import Cards from '../../components/UI/Cards/Cards';
class Home extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);

		this.state = {
			countries: [],
			filteredCountries: [],
			position: 0,
			cases: []
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
				)
			};
		});
	};

	handleFiltering = (region) => {
		this.setState((prevState) => {
			return {
				filteredCountries: prevState.countries.filter((x) => x.region === region)
			};
		});
		document.getElementById('filter_value').innerHTML = region;
	};

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all').then((res) => res.json()).then((data) => {
			// console.log(data)
			this.setState(() => {
				return {
					countries: data,
					filteredCountries: data
				};
			});
		});

		fetch('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases')
			.then((res) => res.json())
			.then((data) => {
				this.setState(() => {
					return {
						cases: data
					};
				});
			});

		window.addEventListener('scroll', this.handleScroll, { passive: true });
	}

	componentDidUpdate() {
		if (this.props.location.props) {
			// console.log("RPINTE",this.props.location.props.position)
			window.scrollTo(0, this.props.location.props.position);
			this.props.location.props = null;
		}
	}

	handleScroll(event) {
		this.setState(() => {
			return {
				position: window.scrollY
			};
		});
		console.log(this.state.position);
	}

	render() {
		return (
			<Aux>
				<SearchBar
					Dark={this.props.Dark}
					setDark={this.props.setDark}
					handleInputSearch={this.handleInputSearch}
				/>
				<DropDown Dark={this.props.Dark} setDark={this.props.setDark} handleFiltering={this.handleFiltering} />
				<Cards
					position={this.state.position}
					Dark={this.props.Dark}
					setDark={this.props.setDark}
					countries={this.state.filteredCountries}
					cases={this.state.cases}
				/>
			</Aux>
		);
	}
}

export default Home;
