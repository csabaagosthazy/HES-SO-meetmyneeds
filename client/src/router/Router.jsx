import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "../components/pages/Questionnaire";
import Result from "../components/pages/Result";
const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire />} />

        <Route path="/results" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
