import { useContext, useEffect, useState } from "react";
import UnitsContext from "../Contexts/UnitsContext.js";
import styles from '../css_modules/WeatherStats.module.css';

const AtmosphericConditions = ({ stats }) => {

    const units = useContext(UnitsContext);
    const [windValue, setWindValue] = useState(stats.wind.speed);
    const [vbValue, setVbValue] = useState(stats.visibility);
    const [pressureValue, setPressureValue] = useState(stats.main.pressure);

    useEffect(() => {
        function convertWindValue(unitSystem,value) {
            switch(unitSystem) {
                case 'km/hr':
                    setWindValue((value * 18/5).toFixed(2));
                    break;
                case 'mph':
                    setWindValue((value * 2.236936).toFixed(2));
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
                case 'miles':
                    setVbValue((value/1609.34).toFixed(2));
                    break;
                default:
                    setVbValue(value);
            }
        }

        function converPressureValue(unitSystem, value) {
            switch(unitSystem) {
                case 'Pa':
                    setPressureValue(value * 100);
                    break;
                default:
                    setPressureValue(value);
            }
        }
        convertWindValue(units.wind, stats.wind.speed);
        convertVbValue(units.visibility, stats.visibility);
        converPressureValue(units.pressure, stats.main.pressure);
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
                <p>{pressureValue}&nbsp;<span>{units.pressure}</span></p>
            </div>
        </section>
    );
}

export default AtmosphericConditions;