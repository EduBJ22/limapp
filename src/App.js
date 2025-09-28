import logo from './logo.png';
import ig from './instagram.svg.webp';
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
          SIGUENOS EN INSTAGRAM
        </p>
        <a href="https://www.instagram.com/limalimonsd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={ig} className="App-ig" alt="instagram" />
        </a>
      </header>
    </div>
  );
}

export default App;
