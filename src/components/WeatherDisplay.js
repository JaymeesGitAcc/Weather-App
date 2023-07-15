import { useEffect, useState } from 'react';
import styles from '../css_modules/WeatherDisplay.module.css';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';
import WeatherContext from '../Contexts/WeatherContext.js';
import Clock from './Clock';
const spinner = require('../images/spinner.gif');

const WeatherDisplay = ({setCoord}) => {

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [city, setCity] = useState(() => {
        const defaultCity = localStorage.getItem('defaultCity')
            ? JSON.parse(localStorage.getItem('defaultCity'))
            : 'Gorakhpur';
        return defaultCity ? defaultCity : 'Gorakhpur';
    });
   
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
                    setCoord(res.coord);
                    setError(false);
                }

            } catch (err) {
                setError(true);
            }
        }
        api();
    }, [city, setCoord]);


    return <section className={styles.weather__display}>
        <Clock />
        <SearchBar setCity={setCity} />
        {
            !error ?
                <WeatherContext.Provider value={weatherData}>
                    {
                        weatherData ?
                            <>
                                <WeatherInfo />
                                <WeatherStats />
                            </> : 
                            <div className='loader'>
                                <img src={spinner} alt="spinner" />
                            </div>
                    }
                </WeatherContext.Provider> :
                <div className='error'>Weather info not available for the city <b>{city}</b></div>
        }
    </section>
}

export default WeatherDisplay;