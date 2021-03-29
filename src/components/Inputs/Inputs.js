import React, { useState } from 'react';
import classes from './Inputs.module.css';

const Inputs = (props) => {
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={props.getForecast}>
                <input
                    type="text"
                    placeholder="Enter Key"
                    maxLength="49"
                    className={classes.textInput}
                    value={props.mykey}
                    onChange={e => props.handleKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter SleepTime"
                    maxLength="49"
                    className={classes.textInput}
                    value={props.sleepTime}
                    onChange={e => props.handleSleepTime(e.target.value)}
                />
                <div>
                    <input
                        type="text"
                        placeholder="Enter City"
                        maxLength="49"
                        className={[classes.textInput, classes.inlineFlex].join(' ')}
                        value={props.city}
                        onChange={e => props.handleCity(e.target.value)}
                    />
                    <button type='button' className={[classes.inlineFlex].join(' ')} onClick={() => props.handleCity('')}>x</button>
                </div>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={props.unit === "imperial"}
                        value="imperial"
                        onChange={e => props.handleUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={props.unit === "metric"}
                        value="metric"
                        onChange={e => props.handleUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <button
                    className={classes.Button}
                    type="submit">Get Forecast</button>
            </form>
        </div>
    )
};

export default Inputs;