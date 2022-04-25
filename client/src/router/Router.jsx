import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "../components/pages/Questionnaire";
import Result from "../components/pages/Result";
import QuestionnaireSelector from "../components/pages/QuestionnaireSelector";

import LoginPryv from "../components/auth/LoginPryv";
import WelcomePage from "../components/pages/Welcome";
import History from "../components/pages/History";

const MainRouter = ({ children }) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={children}>
                    <Route index element={<WelcomePage />} />
                    <Route path="selector" element={<QuestionnaireSelector />} />
                    <Route path="history" element={<History />} />
                    <Route path="login" element={<LoginPryv />} />
                    <Route path="questionnaire" element={<Questionnaire />} />
                    <Route path="results" element={<Result />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default MainRouter;
