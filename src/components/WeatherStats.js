import { useContext } from 'react';
import styles from '../css_modules/WeatherStats.module.css';
import WeatherContext from '../WeatherContext';
import UnitsContext from '../UnitsContext';

const WeatherStats = () => {

    const stats = useContext(WeatherContext);
    const units = useContext(UnitsContext);

    return (
        stats && (
            <section className={styles.weather__stats}>
                <div className={styles.stats__data}>
                    <h3>Wind</h3>
                    <p>{stats.wind.speed}&nbsp;<span>{units.wind}</span></p>
                </div>
                <div className={styles.stats__data}>
                    <h3>Humidity</h3>
                    <p>{stats.main.humidity}&nbsp;<span>%</span></p>
                </div>
                <div className={styles.stats__data}>
                    <h3>Visibility</h3>
                    <p>{((stats.visibility) / 1000).toFixed(2)}&nbsp;<span>{units.visibility}</span></p>
                </div>
                <div className={styles.stats__data}>
                    <h3>Pressure</h3>
                    <p>{stats.main.pressure}&nbsp;<span>mb</span></p>
                </div>
            </section>)
    );
}

export default WeatherStats;