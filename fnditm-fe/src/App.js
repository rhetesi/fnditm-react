import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
// import itemlist from './dev/db.js'; // ez csak a szinkron lekéréshez kellett

function App() {

  // const [items, setItems] = useState([{itemlist}]); // sync, azaz szinkorn lekérés a db.js fájlból
  const [items, setItems] = useState([]);
  const apiUrl = "https://my-json-server.typicode.com/rhetesi/fnditm-react/items";

  const [searchString, setSearchString] = useState([]);

  const searchChange = (e) => {
    setSearchString(e.target.value)
  }

  // Sync fetch the items to show
  // useEffect(()=>{
  //   if (searchString.length > 0) {
  //     setItems(itemlist.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase())));
  //   } else {
  //     setItems(itemlist);
  //   }
  // },[searchString])

  // Async fetch the items to show
  useEffect(()=>{
    const getItemsfromAPI = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        // console.log(result);
        if (searchString.length > 0) {
          setItems(result.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase())));
        } else {
          setItems(result);
        }
      } catch (error) {
        console.error(error)
      }
    }
    getItemsfromAPI();
  },[searchString])

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
        <input type="text" placeholder="tárgy keresése" className="text-small" onChange={searchChange}></input>
        <p>{searchString}</p>
      </header>
      <main>
        <div className="container-fluid p-4">
          <div className="mt-2">
            {/* Itt lesznek egyedi kártyák */}
            {/* Ezek a kártyák a szinkron végrehajtásból */}
            {/* <div>
              <h3>Szinkron lekérés</h3>
            </div>
            <div className="row g-4">
              {
              items.map( (item, index) => {
                return (
                                  
                  <Card item={item} index={index}/>
                  
                )
              })
              }
            </div> */}

            {/* Ezek a kártyák az aszinkron lekérésből */}
            {/* <div>
              <h3>Aszinkron lekérés</h3>
            </div> */}
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
