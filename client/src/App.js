import "./App.css";

import CustomButtonGroup from "./components/button/CustomButtonGroup";

//{ children, size, color, textColor, focusColor }
const text = {
  essential: "Essential",
  important: "Important",
  medium: "Less important",
  done: "Need already met",
  none: "Not concerned",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButtonGroup variant={"redSet"} textObj={text} />
        <CustomButtonGroup variant={"yellowSet"} textObj={text} />
        <CustomButtonGroup variant={"greenSet"} textObj={text} />
        <CustomButtonGroup variant={"blueSet"} textObj={text} />
      </header>
    </div>
  );
}

export default App;
