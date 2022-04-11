import React from "react";
import { Nav } from "react-bootstrap";
import { useAuth } from "../../services/pryv/service";

const Navigation = (props) => {
    const { connection, logout } = useAuth();
    console.log(connection);
    return (
        <Nav className="col col-md-2 d-md-block col-xs-12 d-xs-inline-block" variant="pills">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {!connection ? (
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
            ) : (
                <Nav.Item>
                    <Nav.Link href="/" onClick={logout}>
                        Logout
                    </Nav.Link>
                </Nav.Item>
            )}
        </Nav>
    );
};

export default Navigation;
