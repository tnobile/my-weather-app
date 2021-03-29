import React, { useState } from 'react';
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
            <Inputs
                getForecast={getForecast}
                city={city}
                key={key}
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

export default Forecast;