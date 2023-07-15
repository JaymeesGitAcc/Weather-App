import { useState } from "react";
import SettingsButton from "./components/SettingsButton";
import SettingsMenu from "./components/SettingsMenu";
import WeatherDisplay from "./components/WeatherDisplay";
import UnitsContext from "./Contexts/UnitsContext.js";
import Forecast from "./components/Forecast";

function App() {

    const [units, setUnits] = useState(getLocalStorage());
    const [toggleMenu, setToggleMenu] = useState(false);
    const [coord, setCoord] = useState(null);

    function getLocalStorage() {
        let settings = localStorage.getItem('userSettings');
        settings = settings ? JSON.parse(settings) : {
            temperature: 'celsius',
            wind: 'km/hr',
            visibility: 'km',
            pressure: 'mb'
        };
        return settings;
    }

    return (
        <div className="App">
            <SettingsButton setToggleMenu={setToggleMenu} />

            <SettingsMenu
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                setUnits={setUnits} 
            />

            <UnitsContext.Provider value={units}>
                <WeatherDisplay setCoord={setCoord} />
            </UnitsContext.Provider>

            <Forecast coord={coord} />
        </div>
    );
}

export default App;
