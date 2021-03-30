import React, { useState } from 'react';
import './App.css';
import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

/**
 * https://rapidapi.com/blog/weather-app-react/
 * https://github.com/jdretz/rapid-api-react-weather-app-tutorial
 */
function App() {
  let [myKey, setMyKey] = useState('');

  function handleMyKey (value) {
    setMyKey(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1> Reactive Weather App</h1>
      </header>
      <main>
        <Main myKey={myKey}/>
      </main>
      <footer>
        <Footer handleSubmit={handleMyKey}/>
      </footer>
    </div>
  );
}

export default App;
