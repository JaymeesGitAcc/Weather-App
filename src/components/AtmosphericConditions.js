import { useContext, useEffect, useState } from "react";
import UnitsContext from "../UnitsContext";
import styles from '../css_modules/WeatherStats.module.css';

const AtmosphericConditions = ({ stats }) => {

    const units = useContext(UnitsContext);
    const [windValue, setWindValue] = useState(stats.wind.speed);
    const [vbValue, setVbValue] = useState(stats.visibility);

    useEffect(() => {
        function convertWindValue(unitSystem,value) {
            switch(unitSystem) {
                case 'km/hr':
                    setWindValue((value * 18/5).toFixed(2));
                    break;
                default: 
                    setWindValue(value);
            }
        }

        function convertVbValue(unitSystem, value) {
            switch(unitSystem) {
                case 'km':
                    setVbValue((value/1000).toFixed(2));
                    break;
                default:
                    setVbValue(value);
            }
        }

        convertWindValue(units.wind, stats.wind.speed);
        convertVbValue(units.visibility, stats.visibility);
    },[units, stats]);

    return (
        <section className={styles.weather__stats}>
            <div className={styles.stats__data}>
                <h3>Wind</h3>
                <p>{windValue}&nbsp;<span>{units.wind}</span></p>
            </div>
            <div className={styles.stats__data}>
                <h3>Humidity</h3>
                <p>{stats.main.humidity}&nbsp;<span>%</span></p>
            </div>
            <div className={styles.stats__data}>
                <h3>Visibility</h3>
                <p>{vbValue}&nbsp;<span>{units.visibility}</span></p>
            </div>
            <div className={styles.stats__data}>
                <h3>Pressure</h3>
                <p>{stats.main.pressure}&nbsp;<span>mb</span></p>
            </div>
        </section>
    );
}

export default AtmosphericConditions;