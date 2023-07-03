import { useContext } from 'react';
import styles from '../css_modules/WeatherInfo.module.css';
import WeatherContext from '../WeatherContext';

const WeatherInfo = () => {

    const data = useContext(WeatherContext);

    return (
        data && (<main className={styles.weather__info}>
            <h2>{data.name}</h2>

            <div className={styles.info__container}>
                <div className={styles.weather__image}>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
                </div>

                <div>
                    <h1><span>{data.main.temp}</span> °C</h1>
                </div>

                <div>
                    <h3><span>{data.weather[0].main}</span>&nbsp;|&nbsp;Feels Like&nbsp;<span>{data.main.feels_like}</span>°</h3>
                </div>
            </div>

            <div>
                <p className={styles.desc}>"{data.weather[0].description}"</p>
            </div>
        </main>)
    );
}

export default WeatherInfo;