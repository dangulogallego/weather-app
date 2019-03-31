import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from './../reducers';
import  * as actions from './../actions';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList 
              onSelectedLocation={this.handleSelectionLocation}
              cities={this.props.citiesWeather}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
}

/*const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state), 
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);