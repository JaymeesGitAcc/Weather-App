import { useContext, useEffect, useState } from 'react';
import UnitsContext from '../UnitsContext';
import styles from '../css_modules/WeatherInfo.module.css';

const WeatherInfoContents = ({ data }) => {

    const units = useContext(UnitsContext);
    const [tempValue, setTempValue] = useState(data.main.temp);
    const [feelsLike, setFeelsLike] = useState(data.main.feels_like);

    useEffect(() => {

        switch(units.temperature) {
            case 'fahrenheit':
                setTempValue(((data.main.temp * 9/5) + 32).toFixed(2));
                setFeelsLike(((data.main.feels_like * 9/5) + 32).toFixed(2));
                break;
            default: 
                setTempValue(data.main.temp);
                setFeelsLike(data.main.feels_like);
        }
    }, [units, data]);

    return (
        <main className={styles.weather__info}>
            <h2>{`${data.name}, ${data.sys.country}`}</h2>

            <div className={styles.info__container}>
                <div className={styles.weather__image}>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
                </div>

                <div>
                    <h1 className={styles.temperature}>
                        {tempValue}&nbsp;
                        {`${units.temperature === 'celsius' ? '°C' : '°F'}`}
                    </h1>
                </div>

                <div>
                    <h3>
                        {data.weather[0].main}&nbsp;|&nbsp;Feels Like&nbsp;
                        {feelsLike}
                        &nbsp;
                        {`${units.temperature === 'celsius' ? '°C' : '°F'}`}
                    </h3>
                </div>
            </div>

            <div>
                <p className={styles.desc}>"{data.weather[0].description}"</p>
            </div>
        </main>);
}

export default WeatherInfoContents;