import styles from '../css_modules/Clock.module.css';
import { useEffect, useState } from "react";

const Clock = () => {

    const [currentTime, setCurrentTime] = useState('');
    const [dayName, setDayName] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            displayTime()
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    function displayTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        let options = { weekday: 'long' };
        let dayName = date.toLocaleDateString('en-US', options);

        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        const formattedTime = formattedHours + " : " + formattedMinutes + " " + ampm;

        setDayName(dayName);

        setCurrentTime(formattedTime);
    }

    return ( 
        <div className={styles.clock}>
           <p>{dayName},&nbsp;{currentTime}</p>
        </div>
     );
}
 
export default Clock;