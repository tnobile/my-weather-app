import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import Inputs from '../Inputs/Inputs';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('London');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [key, setKey] = useState('');
    let [sleepTime, setSleepTime] = useState(1000);
    let [temperature, setTemperature] = useState([{ scale: 'c', temp: 0 }, { scale: 'f', temp: 0 }]);

    useEffect(() => console.log(JSON.stringify(temperature)), [temperature]);
    const uriEncodedCity = encodeURIComponent(city);

    function handleKey(value) {
        setKey(value);
    }
    function handleSleepTime(value) {
        setSleepTime(value);
    }
    function handleUnit(value) {
        setUnit(value);
    }
    function handleCity(value) {
        setCity(value);
    }
    function handleTemperature(value, unit) {
        if (unit === 'metric') {
            setTemperature([{ scale: 'c', temp: tryConvert(value, n => n) }, { scale: 'f', temp: tryConvert(value, toFahrenheit) }]);
        } else {
            setTemperature([{ scale: 'f', temp: tryConvert(value, n => n) }, { scale: 'c', temp: tryConvert(value, toCelsius) }]);
        }
        console.log(JSON.stringify(temperature));
    }
    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(0);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${key}`;
        fetch(url)
            //  The promise, returned by fetch, resolves with an object of the built-in Response class 
            //  as soon as the server responds with headers.
            //  let resp = await fetch(url);

            //       fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Manchester%2Cuk&units=metric", {
            //           "method": "GET",
            //           "headers": {
            //               "x-rapidapi-key": process.env.REACT_APP_API_KEY
            //               "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            //           }
            //       })
            .then(value => sleep(Math.random() * sleepTime, value))
            .then(response => response.json())
            .then(
                response => {
                    if (response.cod !== 200) {
                        throw new Error();
                    }
                    //console.log(response);
                    setResponseObj(response);
                    handleTemperature(response.main.temp, unit);
                    setLoading(false);
                })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.error(err.message);
            });
    }

    return (
        <div>
            <label>{temperature[0]['temp']? JSON.stringify(temperature) : ''}</label>
            <Inputs
                getForecast={getForecast}
                city={city}
                mykey={key}
                unit={unit}
                sleepTime={sleepTime}
                handleCity={handleCity}
                handleKey={handleKey}
                handleUnit={handleUnit}
                handleSleepTime={handleSleepTime}
            />
            <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
        </div>
    );
}

function sleep(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'metric',   //'Celsius',
    f: 'imperial'  //'Fahrenheit'
};

export default Forecast;