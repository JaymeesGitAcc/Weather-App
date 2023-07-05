import styles from '../css_modules/SettingsButton.module.css';

const SettingsButton = ({ toggleMenu, setToggleMenu }) => {

    function handleMenu() {
        if (!toggleMenu)
            setToggleMenu(true);
        else
            setToggleMenu(false);
    }

    return (
        <button className={styles.settings__btn}
            onClick={handleMenu}>Settings</button>
    );
}

export default SettingsButton;