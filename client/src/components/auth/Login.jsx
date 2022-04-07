import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../services/auth/service";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, checkAdmin } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isMounted = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // executed when component mounted
    isMounted.current = true;
    return () => {
      // executed when unmount
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    let user;
    let isAdmin;
    try {
      user = await login(email, password);
      isAdmin = await checkAdmin(user, true);
    } catch {
      setError("Failed to log in");
    } finally {
      if (isMounted.current) {
        setLoading(false);
        if (!!user) {
          if (isAdmin) navigate("/");
          else navigate("/");
        } else {
          setError("Authentication failed");
          navigate("/");
        }
      }
    }
  };

  return (
    <Container className="row justify-content-md-center">
      <Card className="col-md-6">
        <Card.Body>
          <Card.Header className="text-center mb-4">Login</Card.Header>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="w-100 text-center mt-2">
          <p>No account yet?</p>
          <Link to="/signup">Sign up</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Login;
