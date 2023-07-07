import { useContext, useState } from 'react';
import styles from '../css_modules/SettingsMenu.module.css';

const SettingsMenu = ({ toggleMenu }) => {

    const [defaultCity, setDefaultCity] = useState('');

    const [tempUnit, setTempUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().temperature
            : 'celsius';
    });

    const [windUnit, setWindUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().wind
            : 'km/hr';
    });

    const [visibilityUnit, setVisibilityUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().visibility
            : 'km';
    });

    function getSettingsFromLS() {
        const settings = localStorage.getItem('userSettings')
            ? JSON.parse(localStorage.getItem('userSettings'))
            : null;

        return settings;
    }

    function saveSettings() {

        const updatedSettings = {
            temperature: tempUnit,
            wind: windUnit,
            visibility: visibilityUnit
        };
        if (defaultCity)
            localStorage.setItem('defaultCity', JSON.stringify(defaultCity));
        localStorage.setItem('userSettings', JSON.stringify(updatedSettings));
        setDefaultCity('');
        // setToggleMenu(false);
    }
    return (
        <div className={`${styles.settings__menu} ${toggleMenu ? styles.show__menu : ''}`}>

            <div className={styles.default__city}>
                <input type="text"
                    value={defaultCity}
                    onChange={e => setDefaultCity(e.target.value)}
                    placeholder='set default city' />
            </div>

            <section className={styles.units__setting}>

                <div className={`${styles.tempSetting} ${styles.row}`}>
                    <p>Temperature:</p>
                    <div>
                        <button
                            className={tempUnit === 'celsius' ? `${styles.selected}` : ``}
                            onClick={() => setTempUnit('celsius')}>°C</button>
                        <button
                            className={tempUnit === 'fahrenheit' ? `${styles.selected}` : ``}
                            onClick={() => setTempUnit('fahrenheit')}>°F</button>
                    </div>
                </div>

                <div className={styles.row}>
                    <p>Wind:</p>
                    <div>
                        <button
                            className={windUnit === 'km/hr' ? `${styles.selected}` : ``}
                            onClick={() => setWindUnit('km/hr')}>km/hr</button>
                        <button
                            className={windUnit === 'm/s' ? `${styles.selected}` : ``}
                            onClick={() => setWindUnit('m/s')}>m/s</button>
                    </div>
                </div>

                <div className={styles.row}>
                    <p>Visibility:</p>
                    <div>
                        <button
                            className={visibilityUnit === 'km' ? `${styles.selected}` : ``}
                            onClick={() => setVisibilityUnit('km')}>km</button>
                        <button
                            className={visibilityUnit === 'm' ? `${styles.selected}` : ``}
                            onClick={() => setVisibilityUnit('m')}>m</button>
                    </div>
                </div>
            </section>

            <div className={styles.actionBtns}>
                <button onClick={saveSettings}>Save Preferences</button>
            </div>
        </div>
    );
}

export default SettingsMenu;