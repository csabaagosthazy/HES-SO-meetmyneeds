import "./App.css";
import Questionnaire from "./components/pages/Questionnaire";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Questionnaire id={1} lang={"en"} />
    </div>
  );
}

export default App;
