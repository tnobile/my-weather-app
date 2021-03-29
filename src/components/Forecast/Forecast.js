import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('London');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [key, setKey] = useState('');

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(0);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);


        const url = `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${key}`;
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
            .then(value => sleep(Math.random() * 5000, value))
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
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter Key"
                    maxLength="50"
                    className={classes.textInput}
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>

                <button
                    className={classes.Button}
                    type="submit">Get Forecast</button>
            </form>
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