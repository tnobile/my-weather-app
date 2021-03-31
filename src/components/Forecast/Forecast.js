import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import Inputs from '../Inputs/Inputs';
import classes from './Forecast.module.css';

const Forecast = (props) => {
    let [responseObj, setResponseObj] = useState({});
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [sleepTime, setSleepTime] = useState(1000);
    let [lon, setLon] = useState();
    let [lat, setLat] = useState();
    let [temperature, setTemperature] = useState([{ scale: 'c', temp: 0 }, { scale: 'f', temp: 0 }]);

    useEffect(() => console.log(JSON.stringify(temperature)), [temperature]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

        console.log("Latitude is:", lat);
        console.log("Longitude is:", lon);
    }, [lat, lon]);


    function handleSleepTime(value) {
        setSleepTime(value);
    }
    function handleUnit(value) {
        setUnit(value);
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

        const key=props.myKey;
        if (!key || key.length === 0) {
            setError(0);
            return;
        }
        setError(false);
        setResponseObj({});
        setLoading(true);
        const uriEncodedCity = encodeURIComponent(props.city);

        const url = props.city ?
            `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${key}` :
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`;
        console.log(url);
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
                    props.handleCity(response.name, props.cityId)
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
            <label>{temperature[0]['temp'] ? JSON.stringify(temperature) : ''}</label>
            <Inputs
                getForecast={getForecast}
                city={props.city}
                mykey={props.myKey}
                unit={unit}
                sleepTime={sleepTime}
                handleCity={props.handleCity}
                handleUnit={handleUnit}
                handleSleepTime={handleSleepTime}
            />
            <button className={classes.Button} onClick={() => props.handleCity('')}>Clear City</button>
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