import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import WeatherLocation from "./WeatherLocation";

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationCity = city => {
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map(
            city => (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name}
                    onWeatherLocationClick={() => handleWeatherLocationCity(city.name)}
                    data={city.data}
                />
            )
        )
    );
    
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;