import logo from './logo.png';
import ig from './instagram.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logoLima" alt="logo" />
        <p>
          CB LIMA LIMÓN
        </p>
        <p>
          SIGUENOS EN NUESTRAS REDES
        </p>
        <img src={ig} className="App-ig" alt="instagram" />
      </header>
    </div>
  );
}

export default App;
