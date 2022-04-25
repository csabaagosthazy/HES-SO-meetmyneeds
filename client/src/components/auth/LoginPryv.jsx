import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../services/pryv/service";
import { Container, Card } from "react-bootstrap";

const LoginPryv = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { connection, initalize } = useAuth();

    React.useEffect(async () => {
        await initalize();
    }, []);

    React.useEffect(() => {
        if (connection && connection.token) {
            if (location && location.state) {
                navigate(location.state.goto);
            } else {
                navigate("/selector");
            }
        }
    }, [connection]);
    return (
        <Container className="row justify-content-md-center">
            <Card className="col-md-6 text-center mb-4">
                <Card.Header>Login with Pryv</Card.Header>
                <Card.Title>Meet My Needs website uses Pryv to keep private data safe</Card.Title>

                <Card.Body>
                    <Card.Subtitle>To use expanded functionalities please sign in</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <span id="pryv-button"></span>
                    <br />
                </Card.Footer>
            </Card>
        </Container>
    );
};
export default LoginPryv;
