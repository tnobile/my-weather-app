import react, {useState} from 'react';
import Forecast from '../Forecast/Forecast';
import classes from './Main.module.css';

const Main = (props) => {
    const [city1, setCity1] = useState('Tokyo');
    const [city2, setCity2] = useState('London');
    const [city3, setCity3] = useState('Barcelona');
    const [city4, setCity4] = useState('');
    function handleCity1(city, id) {
        setCity1(city);
    }
    function handleCity2(city, id) {
        setCity2(city);
    }
    function handleCity3(city, id) {
        setCity3(city);
    }
    function handleCity4(city, id) {
        setCity4(city);
    }
    return (
        <div className={classes.mainContent}>
            <div className={classes.item}><Forecast myKey={props.myKey} city={city1} cityId='city1' handleCity={handleCity1}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey} city={city2} cityId='city2' handleCity={handleCity2}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey} city={city3} cityId='city3' handleCity={handleCity3}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey} city={city4} cityId='city4' handleCity={handleCity4}/></div>
        </div>
    )
}

export default Main;