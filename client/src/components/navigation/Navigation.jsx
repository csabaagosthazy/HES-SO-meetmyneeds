import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useAuth } from "../../services/pryv/service";

const Navigation = () => {
    const { connection, logout } = useAuth();
    return (
        <Nav className="col col-md-2 d-md-block col-xs-12 d-xs-inline-block" variant="pills">
            <Nav.Item>
                <NavLink to="/selector">Home</NavLink>
            </Nav.Item>
            {connection && connection.token ? (
                <>
                    <Nav.Item>
                        <NavLink to="/history">History</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/" onClick={logout}>
                            Logout
                        </NavLink>
                    </Nav.Item>
                </>
            ) : (
                <Nav.Item>
                    <NavLink to="/login">Login</NavLink>
                </Nav.Item>
            )}
        </Nav>
    );
};

export default Navigation;
