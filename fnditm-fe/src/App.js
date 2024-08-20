import logo from './logo.svg';
import './App.css';
import cardPlaceholder from "./pics/placeholder_681_528px.png";
import Card from "./components/Card.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <h1 className="header-title pt-4">Talált tárgyak</h1>
      </header>
      <main>
        <div className="container-fluid p-4">
          <div className="card border-secondary">
            <img
              src={cardPlaceholder}
              className="card-img-top cardPlaceholder"
              alt="card"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div>{Card}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
