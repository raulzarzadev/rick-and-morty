import "./App.css";
import FindInput from "./components/FindInput";
import "./styles/header.css";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>logo</div>
        <div>Tu personaje favorito de Rick and Morty</div>
        <nav>
          <ul>
            <li>inicio</li>
            <li>acerca de</li>
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
