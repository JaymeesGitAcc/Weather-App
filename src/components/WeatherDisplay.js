import { useEffect, useState } from 'react';
import styles from '../css_modules/WeatherDisplay.module.css';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';
import WeatherContext from '../WeatherContext';
import Clock from './Clock';

const WeatherDisplay = () => {

    const [city, setCity] = useState('Gorakhpur');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    async function fetchData(cityname) {
        if(cityname) {
            const apiKey = '629cae91753c6dfa85aded52928beddb';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;
    
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
            
    }

    useEffect(() => {
            fetchData(city);
    }, [city]);

    return (
        <section className={styles.weather__display}>
            <Clock/>
            <SearchBar setCity={setCity} />
            {
                !error ?
                    <WeatherContext.Provider value={weatherData}>
                        <WeatherInfo />
                        <WeatherStats />
                    </WeatherContext.Provider>
                    : <div style={{marginTop: "1rem"}}>Weather Info not available for the city "{city}"</div>
            }

        </section>
    );
}

export default WeatherDisplay;