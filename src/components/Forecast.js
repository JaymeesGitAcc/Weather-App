import { useEffect, useState } from "react";
import styles from '../css_modules/Forecast.module.css';
const spinner = require('../images/spinner.gif');

const Forecast = ({ coord }) => {

    const [dailyForecast, setDailyForecast] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {

        async function fetchData(coord) {
            if (coord) {
                const apiKey = '629cae91753c6dfa85aded52928beddb';
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${apiKey}`;
                try {
                    const data = await fetch(url);
                    const response = await data.json();

                    setDailyForecast(response.list);
                    setError(false);
                }
                catch (error) {
                    console.log(error.message);
                    setError(true);
                }
            }
        }

        fetchData(coord);
    }, [coord]);

    if (!Array.isArray(dailyForecast))
        return <div className="loader">
            <img src={spinner} alt="spinner-icon" />
        </div>

    return (!error &&
        <section className={styles.forecast__section}>
            <h1 style={{textAlign: 'center', color: '#222'}}>Forecast Chart</h1>

            <div className={styles.cards__container}>
                {
                    dailyForecast.map(forecast => {
                        const id = crypto.randomUUID();
                        const date = new Date(forecast.dt_txt);
                        const timeOptions = { hours: 'numeric', minutes: 'numeric', hours12: true };
                        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
                        const dayOptions = { weekday: 'short' };
                        const formattedDay = date.toLocaleDateString('en-US', dayOptions);


                        return (
                            <div key={id} className={styles.forecast__card}>
                                <p>{formattedDay}</p>
                                <p className={styles.time}>{formattedTime}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                    alt="weather-icon" />
                                <p>{forecast.main.temp}°C</p>
                                <p className={styles.desc}>"{forecast.weather[0].description}"</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>);
}

export default Forecast;