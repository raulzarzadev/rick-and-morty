import "./App.css";
import "./styles/main.css";
import CharterDisplay from "./components/CharterDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <CharterDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default App;
