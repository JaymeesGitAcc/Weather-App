import { useState } from 'react';
import styles from '../css_modules/SearchBar.module.css';

const SearchBar = ({ setCity }) => {

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue) alert("Please enter a value");
        else setCity(inputValue);
        setInputValue('');
    }

    return (
        <div className={styles.search__bar}>
            <form className={styles.search__form} onSubmit={handleSubmit}>
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