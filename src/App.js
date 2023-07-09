import { useState } from "react";
import SettingsButton from "./components/SettingsButton";
import SettingsMenu from "./components/SettingsMenu";
import WeatherDisplay from "./components/WeatherDisplay";
import UnitsContext from "./UnitsContext";

function App() {

  const [units, setUnits] = useState(getLocalStorage());
  const [toggleMenu, setToggleMenu] = useState(false);

  function getLocalStorage() {
    let settings = localStorage.getItem('userSettings');
    settings = settings ? JSON.parse(settings) : {
      temperature: 'celsius',
      wind: 'km/hr',
      visibility: 'km'
    };
    return settings;
  }

  return (
    <div className="App">
      <SettingsButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <SettingsMenu toggleMenu={toggleMenu} setUnits={setUnits} />

      <UnitsContext.Provider value={units}>
        <WeatherDisplay />
      </UnitsContext.Provider>
    </div>
  );
}

export default App;
