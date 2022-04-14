import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../services/pryv/service";

const LoginPryv = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { connection, initalize } = useAuth();

    React.useEffect(async () => {
        await initalize();
        console.log(location);
    }, []);

    React.useEffect(() => {
        console.log("connection changed");
        if (connection && connection.token) {
            if (location && location.state) {
                navigate(location.state.goto);
            } else {
                navigate("/selector");
            }
        }
    }, [connection]);
    return (
        <div>
            <h1>Meet My Needs website uses Pryv to keep private data safe</h1>
            <p>To use expanded functionalities please sign in</p>
            <p>
                <span id="pryv-button"></span> <strong>⇠ sign in here</strong>
                <br />
            </p>
        </div>
    );
};
export default LoginPryv;
