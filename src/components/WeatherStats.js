import { useContext } from 'react';
import WeatherContext from '../WeatherContext';
import AtmosphericConditions from './AtmosphericConditions';

const WeatherStats = () => {

    const stats = useContext(WeatherContext);

    return (
        stats && <AtmosphericConditions stats={stats}/>
    );
}

export default WeatherStats;