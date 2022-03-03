import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter>My counter</Counter>
      </header>
    </div>
  );
}

export default App;
