import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logoLima" alt="logo" />
        <p>
          CB LIMA LIMÓN
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SIGUENOS EN NUESTRAS REDES
        </a>
      </header>
    </div>
  );
}

export default App;
