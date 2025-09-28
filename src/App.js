import logo from './logo.png';
import ig from './instagram.svg.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">
          <img src={logo} className="App-logoLima" alt="logo" />
          <p className="App-header-title">CB LIMA LIMÓN</p>
        </div>

        <nav className="App-nav" aria-label="Secciones">
          <a href="#quienes" className="App-nav-link">¿Quiénes somos?</a>
          <a href="#jugadores" className="App-nav-link">Jugadores</a>
          <a href="#patrocinadores" className="App-nav-link">Patrocinadores</a>
        </nav>

        <div className="App-header-right">
          <span className="App-hashtag">#todosconellemon</span>
          <span className="App-emojis" aria-hidden="true">🍋‍🟩🍋</span>
        </div>
      </header>

      <main className="App-main">
        {/* Aquí va el contenido principal de la página */}
      </main>

      <footer className="App-footer">
        <div className="App-footer-left">
          <p className="App-footer-text">SIGUENOS EN INSTAGRAM</p>
          <a href="https://www.instagram.com/limalimonsd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={ig} className="App-ig" alt="instagram" />
          </a>
        </div>
        <div className="App-footer-right">
          <span>CB Lima Limón 2025</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
