import styles from '../css_modules/SettingsMenu.module.css';

const SettingsMenu = ({ toggleMenu }) => {
    return ( 
        <div className={`${styles.settings__menu} ${toggleMenu ? styles.show__menu : ''}`}>
            <p>
                Settings Menu
            </p>
        </div>
     );
}
 
export default SettingsMenu;