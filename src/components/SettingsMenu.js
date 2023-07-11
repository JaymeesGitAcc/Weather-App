import { useState } from 'react';
import styles from '../css_modules/SettingsMenu.module.css';

const SettingsMenu = ({ toggleMenu, setUnits }) => {

    const [defaultCity, setDefaultCity] = useState('');
    const [saveTitle, setSaveTitle] = useState('Save Preferences');

    const [tempUnit, setTempUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().temperature
            : 'celsius';
    });

    const [windUnit, setWindUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().wind
            : 'm/s';
    });

    const [visibilityUnit, setVisibilityUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().visibility
            : 'm';
    });

    const [pressureUnit, setPressureUnit] = useState(() => {
        return getSettingsFromLS()
            ? getSettingsFromLS().pressure
            : 'mb';
    });

    function getSettingsFromLS() {
        const settings = localStorage.getItem('userSettings')
            ? JSON.parse(localStorage.getItem('userSettings'))
            : null;

        return settings;
    }

    function saveAsDefaultCity() {
        if (defaultCity)
            localStorage.setItem('defaultCity', JSON.stringify(defaultCity));
        setDefaultCity('');
    }

    function saveSettings() {
        const updatedSettings = {
            temperature: tempUnit,
            wind: windUnit,
            visibility: visibilityUnit,
            pressure: pressureUnit
        };
        localStorage.setItem('userSettings', JSON.stringify(updatedSettings));
        saveAsDefaultCity();
        setUnits(updatedSettings);

        setSaveTitle('Preferences Saved!');

        setTimeout(() => {
            setSaveTitle('Save Preferences');
        }, 1000);
    }

    return (
        <div className={`${styles.settings__menu} ${toggleMenu ? styles.show__menu : ''}`}>

            <div className={styles.default__city}>
                <input type="text"
                    value={defaultCity}
                    onChange={e => setDefaultCity(e.target.value)}
                    placeholder='set default city...'
                />
                <button onClick={saveAsDefaultCity}>Save as default</button>
            </div>

            <section className={styles.units__setting}>

                <div className={styles.row}>
                    <p className={styles.unit__title}>Temperature:</p>
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
                    <p className={styles.unit__title}>Wind:</p>
                    <div>
                        <button
                            className={windUnit === 'm/s' ? `${styles.selected}` : ``}
                            onClick={() => setWindUnit('m/s')}>
                            m/s
                        </button>

                        <button
                            className={windUnit === 'km/hr' ? `${styles.selected}` : ``}
                            onClick={() => setWindUnit('km/hr')}>
                            km/hr
                        </button>

                        <button
                            className={windUnit === 'mph' ? `${styles.selected}` : ``}
                            onClick={() => setWindUnit('mph')}>
                            mph
                        </button>
                    </div>
                </div>

                <div className={styles.row}>
                    <p className={styles.unit__title}>Visibility:</p>
                    <div>
                        <button
                            className={visibilityUnit === 'm' ? `${styles.selected}` : ``}
                            onClick={() => setVisibilityUnit('m')}>
                            m
                        </button>

                        <button
                            className={visibilityUnit === 'km' ? `${styles.selected}` : ``}
                            onClick={() => setVisibilityUnit('km')}>
                            km
                        </button>

                        <button
                            className={visibilityUnit === 'miles' ? `${styles.selected}` : ``}
                            onClick={() => setVisibilityUnit('miles')}>
                            miles
                        </button>
                    </div>
                </div>


                <div className={styles.row}>
                    <p className={styles.unit__title}>Pressure:</p>
                    <div>
                        <button
                            className={pressureUnit === 'mb' ? `${styles.selected}` : ``}
                            onClick={() => setPressureUnit('mb')}>
                            mb
                        </button>
                        <button
                            className={pressureUnit === 'hPa' ? `${styles.selected}` : ``}
                            onClick={() => setPressureUnit('hPa')}>
                            hPa
                        </button>
                        <button
                            className={pressureUnit === 'Pa' ? `${styles.selected}` : ``}
                            onClick={() => setPressureUnit('Pa')}>
                            Pa
                        </button>
                    </div>
                </div>
            </section>

            <div className={styles.actionBtn}>
                <button className={saveTitle === "Preferences Saved!" ? `${styles.clicked}` : ``}
                    onClick={saveSettings}>{saveTitle}</button>
            </div>
        </div>
    );
}

export default SettingsMenu;