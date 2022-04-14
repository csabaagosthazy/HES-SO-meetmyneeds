import { useState, useEffect } from "react";
import { useAuth } from "../../services/pryv/service";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passConfirm, setPassConfirm] = useState();
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // executed when component mounted
    setIsMounted(true);
    return () => {
      // executed when unmount
      setIsMounted(false);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      let user = await signup(email, password);
      if (user) alert("Account created");
    } catch (err) {
      alert("An error occured during registration");
    } finally {
      if (isMounted) {
        setLoading(false);
        navigate("/");
      }
    }
  };

  return (
    <Container className="row justify-content-md-center">
      <Card className="col-md-6">
        <Card.Body>
          <Card.Header className="text-center mb-4">Sign Up</Card.Header>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="firstname">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="lastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="lastname"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="w-100 text-center mt-2">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SignUp;
