import { useContext, useEffect, useState } from 'react';
import styles from '../css_modules/SearchBar.module.css';
import DefaultCity from '../Contexts/DefaultCityContext';

const SearchBar = ({ setCity }) => {

    const [inputValue, setInputValue] = useState('');
    const [inputAlert, setInputAlert] = useState(false);

    const defaultCity = useContext(DefaultCity);

    useEffect(() => {
        if(defaultCity)
            setCity(defaultCity);
    }, [defaultCity, setCity]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue) {
           setInputAlert(true);
           setTimeout(()=>{
                setInputAlert(false);
           }, 1000);
        }
        else 
            setCity(inputValue);
        setInputValue('');
    }

    return (
        <div className={styles.search__bar}>
            <div className={`${styles.noInputAlert} ${inputAlert ? styles.show : ''}`}>
                <p>Please enter a value</p>
            </div>
            <form className={styles.search__form} onSubmit={handleSubmit} id='form'>
                <input type="text"
                    placeholder="Enter city name"
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button type="submit">Search</button>
            </form>
        </div>);
}

export default SearchBar;