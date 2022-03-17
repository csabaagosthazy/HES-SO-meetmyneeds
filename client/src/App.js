import "./App.css";
import Questionnaire from "./components/pages/Questionnaire";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Counter>My counter</Counter>
      <Questionnaire id={1} lang={"en"} />
    </div>
  );
}

export default App;
