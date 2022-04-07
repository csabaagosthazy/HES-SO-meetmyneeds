import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "../components/pages/Questionnaire";
import Result from "../components/pages/Result";
import QuestionnaireSelector from "../components/pages/QuestionnaireSelector";

import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

const MainRouter = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={children}>
          <Route index element={<QuestionnaireSelector />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="questionnaire/:id/:lang/:colorSet" element={<Questionnaire />} />
          <Route path="results" element={<Result />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
