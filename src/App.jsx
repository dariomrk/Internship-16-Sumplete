import React from 'react';
import './App.scoped.css';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <div className="about">
        <h1>Sumplete</h1>
        <p>Delete numbers so each row/column adds up to the target number at the right/bottom.</p>
      </div>
      <Game />
    </div>
  );
}

export default App;
