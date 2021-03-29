import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from "./components/Logo/Logo";

/**
 * https://rapidapi.com/blog/weather-app-react/
 * https://github.com/jdretz/rapid-api-react-weather-app-tutorial
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1> Reactive Weather App</h1>
        <main>
          <Forecast />
        </main>
        <footer>
          Page created by tnobile.
        </footer>
      </header>
    </div>
  );
}

export default App;
