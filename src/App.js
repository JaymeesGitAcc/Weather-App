import { useState } from "react";
import SettingsButton from "./components/SettingsButton";
import SettingsMenu from "./components/SettingsMenu";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="App">
      <SettingsButton
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu} />

      <SettingsMenu toggleMenu={toggleMenu} />
      <WeatherDisplay />
    </div>
  );
}

export default App;
