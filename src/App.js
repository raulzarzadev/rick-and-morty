import "./App.css";
import FindInput from "./components/FindInput";
import "./styles/header.css";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">logo</div>
        <div className="header-title">
          Todos los personajes de Rick and Morty
        </div>
        <nav className="header-navbar">
          <ul className="navbar">
            <li className="navbar-item">inicio</li>
            <li className="navbar-item">acerca de</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <FindInput />
      </main>
      <footer>
        Una app creada por <a href="https://raulzarza.com">RZ</a>
      </footer>
    </div>
  );
}

export default App;
