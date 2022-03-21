import "./App.css";
import Questionnaire from "./components/pages/Questionnaire";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Questionnaire id={1} lang={"en"} />
      </header>
    </div>
  );
}

export default App;
