// import { useState, useEffect } from 'react'; // később kell
// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import items from './dev/db.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 className="header-title">Talált tárgyak</h1>
      </header>
      <main>
        <div className="container-fluid p-4">
          <div className="mt-2">
            {/* Itt lesznek egyedi kártyák */}
            <div className="row g-4">
              {
              items.map( (item, index) => {
                return (
                                  
                  <Card item={item} index={index}/>
                  
                )
              })
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
