import Board from "./Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Board />
        <footer>
          This project was coded by Laurel Rubel and is{" "}
          <a
            href="https://github.com/LaurelFR/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
