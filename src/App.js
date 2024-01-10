import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">DICTIONARY</header>
        <main>
          <Dictionary />
        </main>
        <small className="App-footer">
          Coded by Anna Wierzbicka, and open-sourced in{" "}
          <a href="https://github.com/AnnaOW/dictionary-app-react">GitHub</a>.
        </small>
      </div>
    </div>
  );
}

export default App;
