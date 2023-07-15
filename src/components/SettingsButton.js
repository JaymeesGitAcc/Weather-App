import styles from '../css_modules/SettingsButton.module.css';

const SettingsButton = ({ setToggleMenu }) => {

    function openMenu() {
        setToggleMenu(toggleValue => !toggleValue);
    }

    return (
        <button className={`${styles.settings__btn}`}
            onClick={openMenu}>
            <div className={`${styles.hamBtn}`}>
                <div className={`${styles.line} ${styles.line1}`}></div>
                <div className={`${styles.line} ${styles.line2}`}></div>
                <div className={`${styles.line} ${styles.line3}`}></div>
            </div>
        </button>
    );
}

export default SettingsButton;