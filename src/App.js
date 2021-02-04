import React from 'react';
import './App.css';
import Header from './components/Header';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
        <Header />
        <Forecast />
    </div>
  );
}

export default App;
