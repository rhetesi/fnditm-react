import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Modal from './components/Modal.js';

function App() {

  const [items, setItems] = useState([]);
  const apiUrl = "https://my-json-server.typicode.com/rhetesi/fnditm-react/items";

  const [searchString, setSearchString] = useState([]);

  const searchChange = (e) => {
    setSearchString(e.target.value)
  }

  // Handling theclick on a Card
  const handleClickCard = () => {
    let cardButtons = document.querySelectorAll('.card');
    for (let i = 0; i < cardButtons.length; i++) {
        cardButtons[i].addEventListener('click', () => {
            //console.log(cardButtons[i].value);
            // console.log(cardButtons[i].innerHTML);
            console.log (cardButtons[i].id); // Mivel a meglévő HTML-ben ott az ID is, így annak értékét így ki lehet olvasni! :)
        })
    }
  }

handleClickCard();

  // Async fetch the items to show
  useEffect(()=>{
    const getItemsfromAPI = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
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
            {/* Ezek a kártyák az aszinkron lekérésből */}            
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
