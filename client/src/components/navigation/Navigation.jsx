import React from "react";
import { Nav } from "react-bootstrap";
import { useAuth } from "../../services/pryv/service";

const Navigation = (props) => {
  const { logout } = useAuth();
  return (
    <Nav className="col col-md-2 d-md-block col-xs-12 d-xs-inline-block" variant="pills">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" onClick={logout}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
