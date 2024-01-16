import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">DICTIONARY</header>
        <main>
          <Dictionary defaultKeyword="orange" />
        </main>
        <footer className="App-footer">
          Coded by Anna Oliwia Wierzbicka, and open-sourced in{" "}
          <a href="https://github.com/AnnaOW/dictionary-app-react">GitHub</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
