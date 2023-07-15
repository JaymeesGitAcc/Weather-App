import { useContext } from 'react';
import WeatherContext from '../Contexts/WeatherContext.js';
import AtmosphericConditions from './AtmosphericConditions';

const WeatherStats = () => {

    const stats = useContext(WeatherContext);

    return (
        stats && <AtmosphericConditions stats={stats}/>
    );
}

export default WeatherStats;