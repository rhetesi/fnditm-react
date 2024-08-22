import { useState, useEffect } from 'react'; // később kell
// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import itemlist from './dev/db.js';

function App() {

const [items, setItems] = useState([{itemlist}]);

  const [searchString, setSearchString] = useState([]);

  const searchChange = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(()=>{
    if (searchString.length > 0) {
      setItems(itemlist.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase())));
    } else {
      setItems(itemlist);
    }
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
