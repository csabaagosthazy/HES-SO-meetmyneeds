import React, { useState } from "react";
import { COLORS } from "../../global/colors";
import CustomButton from "../button/CustomButton";
import Contacts from "./Contacts";
import Resources from "./Resources";
import { Card } from "react-bootstrap";
import markdown_render from "../../helpers/markdown_render";

import { useAuth } from "../../services/pryv/service";
import { useNavigate } from "react-router-dom";
import { createEvent, getLastEvents } from "../../services/pryv/functions";

const Result = () => {
    const { connection } = useAuth();
    const navigate = useNavigate();

    const [contacts, showContacts] = useState(false);
    const [resources, showResources] = useState(false);

    const questionnaireAnswers = JSON.parse(sessionStorage.getItem("answers"));
    const answers = questionnaireAnswers.results;

    //sets to store questions grouped by importance of need
    let essential = new Set();
    let important = new Set();
    let less_important = new Set();
    let already_filled = new Set();

    //grouping by importance of need
    answers.forEach((element) => {
        switch (element.technicalKey) {
            case "essential":
                essential.add([element.question_id, element.question]);
                break;
            case "important":
                important.add([element.question_id, element.question]);
                break;
            case "less_important":
                less_important.add([element.question_id, element.question]);
                break;
            case "already_filled":
                already_filled.add([element.question_id, element.question]);
                break;
            default:
            // no-op
        }
    });

    // Create a map of technical key => label
    const labels = new Map(answers.map((answer) => [answer.technicalKey, answer.label]));

    //function that displays questions in set under the certain label
    const displayQuestions = (questionSet, labelSet, label_tag) => {
        let questions_render = [...questionSet].map(([question_id, question_label]) => {
            return (
                <Card.Body
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid",
                        alignItems: "center",
                    }}
                    key={question_id}
                >
                    <Card.Title style={{flex: 1}}><p dangerouslySetInnerHTML={{__html: markdown_render(question_label)}} /></Card.Title>
                    <CustomButton
                        variant={"s"}
                        bgColor={"lightgrey"}
                        onClick={() => showContacts(true)}
                    >
                        Qui contacter?
                    </CustomButton>
                    <CustomButton
                        variant={"s"}
                        bgColor={"yellow"}
                        onClick={() => showResources(true)}
                    >
                        Ressources
                    </CustomButton>
                    <Resources
                        showResources={resources}
                        onHide={() => showResources(false)}
                        question_id={question_id}
                    />
                    <Contacts
                        showContacts={contacts}
                        onHide={() => showContacts(false)}
                        question_id={question_id}
                    />
                </Card.Body>
            );
        });
        questions_render.unshift(
            <Card.Header
                style={
                    {
                        backgroundColor: COLORS[questionnaireAnswers.color][label_tag].background,
                        color: COLORS[questionnaireAnswers.color][label_tag].foreground
                    }
                }
                key={label_tag}
            >
                {labelSet.get(label_tag)}
            </Card.Header>
        );
        return questions_render;
    };

    const saveResultsToPryv = () => {
        if (connection && connection.token) {
            createEvent(connection, "test obj from web");
        } else {
            if (window.confirm("You need to sign in")) {
                navigate("/login", { state: { goto: "/results" } });
            } else {
                console.log("stay on page");
            }
        }
    };
    return (
        <Card>
            {essential.size !== 0 && displayQuestions(essential, labels, "essential")}

            {important.size !== 0 && displayQuestions(important, labels, "important")}

            {less_important.size !== 0 &&
            displayQuestions(less_important, labels, "less_important")}

            {already_filled.size !== 0 &&
            displayQuestions(already_filled, labels, "already_filled")}
            <Card.Footer>
                <CustomButton className="control-button" variant={"m"} bgColor={"lightBlue"} onClick={saveResultsToPryv}>
                    Save my results
                </CustomButton>
            </Card.Footer>
        </Card>
    );
};

export default Result;
