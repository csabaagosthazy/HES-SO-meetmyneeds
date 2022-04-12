import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import CustomButton from "../button/CustomButton";

const WelcomePage = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (e.target.name === "login") navigate("/login");
        else navigate("/selector");
    };
    return (
        <Card>
            <Card.Header>Welcome on MeetMyNeeds site</Card.Header>
            <Card.Title>
                To be able to save your results on your Pryv account please login <br />
                Otherwise continue as a visitor
            </Card.Title>
            <Card.Body>
                <CustomButton
                    name={"login"}
                    variant={"m"}
                    bgColor={"lightBlue"}
                    onClick={handleClick}
                >
                    Login
                </CustomButton>
                <CustomButton
                    name={"ctn"}
                    variant={"m"}
                    bgColor={"lightBlue"}
                    onClick={handleClick}
                >
                    Continue as visitor
                </CustomButton>
            </Card.Body>
        </Card>
    );
};

export default WelcomePage;
