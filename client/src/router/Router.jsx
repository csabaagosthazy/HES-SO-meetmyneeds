import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "../components/pages/Questionnaire";
import Result from "../components/pages/Result";
import QuestionnaireSelector from "../components/pages/QuestionnaireSelector";
const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionnaireSelector />} />
        <Route path="/questionnaire/:id/:lang/:colorSet" element={<Questionnaire />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
