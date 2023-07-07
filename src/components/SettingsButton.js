import { useState } from 'react';
import styles from '../css_modules/SettingsButton.module.css';

const SettingsButton = ({ toggleMenu, setToggleMenu }) => {

    const [buttonState, setButtonState] = useState(false);

    function handleMenu() {
        setToggleMenu(toggleValue => !toggleValue);
        setButtonState(stateValue => !stateValue);
    }

    return (
        <button className={`${styles.settings__btn} ${buttonState ? styles.transform : ''}`}
            onClick={handleMenu}>
            <div className={`${styles.hamBtn}`}>
                <div className={`${styles.line} ${styles.line1}`}></div>
                <div className={`${styles.line} ${styles.line2}`}></div>
                <div className={`${styles.line} ${styles.line3}`}></div>
            </div>
        </button>
    );
}

export default SettingsButton;