import "./App.css";
import FindInput from "./components/FindInput";
import "./styles/header.css";
import "./styles/main.css";
import logo from "./assets/title-rick-and-morty.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img className="header-logo" src={logo} alt="main-logo" />
        </a>

        <nav className="header-navbar">
          <ul className="navbar">
            <li className="navbar-item">
              <a href="/">inicio</a>
            </li>
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
