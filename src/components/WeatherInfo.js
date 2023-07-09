import { useContext } from 'react';
import WeatherContext from '../WeatherContext';
import WeatherInfoContents from './WeatherInfoContents';

const WeatherInfo = () => {

    const data = useContext(WeatherContext);

    return (
        data && <WeatherInfoContents data={data}/>
    );
}

export default WeatherInfo;