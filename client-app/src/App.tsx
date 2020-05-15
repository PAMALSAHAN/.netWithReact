import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo'; /// import karapu ts file eka 
import CarItem from './CarItem'; //car item eka export karaganne mehamai


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ul>
        {cars.map((car)=>(
        <CarItem car={car}/>
          //car eke meke proerty ekak widihata ganna puluwan.
        ))}
      </ul>
    </div>
  );
}

export default App;
