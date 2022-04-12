import React, {useState} from "react";
import * as commonmark from "commonmark";
import {COLORS} from "../../global/colors";
import CustomButton from "../button/CustomButton";
import Contacts from "./Contacts";
import Resources from "./Resources";
import {Card} from "react-bootstrap";

const Result = () => {
    const [contacts, showContacts] = useState(false);
    const [resources, showResources] = useState(false);
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();

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
    const labels = new Map(answers.map(answer => [answer.technicalKey, answer.label]));

    //function that displays questions in set under the certain label
    const displayQuestions = (questionSet, labelSet, label_tag) => {
        let questions_render = [...questionSet].map(([question_id, question_label]) => {
            const question_to_parse = reader.parse(question_label);
            const question_to_display = writer.render(question_to_parse);
            return (
                <Card.Body style={{display: 'flex', flexDirection: 'row', borderBottom:"1px solid", alignItems:"center"}} key={question_id}>
                    <Card.Title style={{flex: 1}}><p dangerouslySetInnerHTML={{__html: question_to_display}} /></Card.Title>
                    <CustomButton variant={"s"} bgColor={"lightgrey"} onClick={() => showContacts(true)}>Qui contacter?</CustomButton>
                    <CustomButton variant={"s"} bgColor={"yellow"} onClick={() => showResources(true)}>Ressources</CustomButton>
                    <Resources  showResources={resources}
                                onHide={() => showResources(false)}
                                question_id={question_id}/>
                    <Contacts   showContacts={contacts}
                                onHide={() => showContacts(false)}
                                question_id={question_id}/>
                </Card.Body>
            );
        });
        questions_render.unshift(
            <Card.Header style={{backgroundColor: COLORS[questionnaireAnswers.color][label_tag]}} key={label_tag}>
                {labelSet.get(label_tag)}
            </Card.Header>
        );
        return questions_render;
    };

    return (
        <Card>
            {essential.size !== 0 && displayQuestions(essential, labels, "essential")}

            {important.size !== 0 && displayQuestions(important, labels, "important")}

            {less_important.size !== 0 && displayQuestions(less_important, labels, "less_important")}

            {already_filled.size !== 0 && displayQuestions(already_filled, labels, "already_filled")}
        </Card>
    );
};

export default Result;
