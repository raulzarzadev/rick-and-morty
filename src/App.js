import FindInput from "./components/FindInput";
import logo from "./assets/title-rick-and-morty.png";
import "./App.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/main.css";

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
      <footer className="footer">
        Una app de <a href="https://raulzarza.com">RZ</a>
      </footer>
    </div>
  );
}

export default App;
