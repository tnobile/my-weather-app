import Forecast from '../Forecast/Forecast';
import classes from './Main.module.css';

const Main = (props) => {
    return (
        <div className={classes.mainContent}>
            <div className={classes.item}><Forecast myKey={props.myKey}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey}/></div>
            <div className={classes.item}><Forecast myKey={props.myKey}/></div>
        </div>
    )
}

export default Main;