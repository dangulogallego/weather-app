import React from 'react';
import PropTypes from 'prop-types'; 
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weatherDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data} 
        />
    ));
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico Extendido...</h3>;
}

const ForecastExtend = ({ city, forecastData }) => (
    <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        { 
            forecastData ? 
                renderForecastItemDays(forecastData)
            : 
                renderProgress()
        }
    </div>
)

ForecastExtend.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtend;