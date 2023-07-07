import { useEffect, useState } from 'react';
import styles from '../css_modules/WeatherDisplay.module.css';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';
import WeatherContext from '../WeatherContext';
import Clock from './Clock';

const WeatherDisplay = () => {

    const [city, setCity] = useState(() => {
        const defaultCity = localStorage.getItem('defaultCity')
            ? JSON.parse(localStorage.getItem('defaultCity'))
            : 'Gorakhpur';
        return defaultCity ? defaultCity : 'Gorakhpur';
    });

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const apiKey = '629cae91753c6dfa85aded52928beddb';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const api = async () => {
            try {
                const data = await fetch(url);

                if (!data.ok) {
                    setError(true);
                }
                else {
                    const res = await data.json();
                    setWeatherData(res);
                    setError(false);
                }

            } catch (err) {
                setError(true);
            }
        }
        api(city);
    }, [city]);

    return (
        <section className={styles.weather__display}>
            <Clock />
            <SearchBar setCity={setCity} />
            {
                !error ?
                    <WeatherContext.Provider value={weatherData}>
                        <WeatherInfo />
                        <WeatherStats />
                    </WeatherContext.Provider>
                    : <div style={{ marginTop: "1rem" }}>Weather Info not available for the city "{city}"</div>
            }

        </section>
    );
}

export default WeatherDisplay;