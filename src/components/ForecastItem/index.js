import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from "./../WeatherLocation/WeatherData";

const ForecastItem = ({ weatherDay, hour, data }) => (
    <div>
        <h2>
            {weatherDay} { hour } hs
        </h2>
        <WeatherData data={data}></WeatherData>
    </div>
)

ForecastItem.propTypes = {
    weatherDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;