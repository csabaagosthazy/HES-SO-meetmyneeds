import React, {useState} from "react";
import * as commonmark from "commonmark";
import {COLORS} from "../../global/colors";
import CustomButton from "../button/CustomButton";
import Contacts from "./Contacts";
import Resources from "./Resources";

const Result = (props) => {
    const [contacts, showContacts] = useState(false);
    const [resources, showResources] = useState(false);
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();

    const obj = JSON.parse(sessionStorage.getItem("answers"));
    const arr = obj.results;
    console.log(obj);

    //sets to store questions grouped by importance of need
    let essential = new Set();
    let important = new Set();
    let less_important = new Set();
    let already_filled = new Set();

    //grouping by importance of need
    arr.forEach((element) => {
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
        }
    });

    //create a set of labels
    var labels = new Map();
    arr.map((item) => labels.set(item.technicalKey, item.label));

    //function that displays questions in set under the certain label
    const displayQuestions = (questionSet, labelSet, label_tag) => {
        let questions_render = [...questionSet].map((item) => {
            const question_to_parse = reader.parse(item[1]);
            const question_to_display = writer.render(question_to_parse);
            <h1 dangerouslySetInnerHTML={{__html: question_to_display}}/>;
            return (
                <div key={item[0]} style={{display:"flex", alignItems:"center"}}>
                    <div dangerouslySetInnerHTML={{__html: question_to_display}}/>
                    <div style={{display:"flex", padding: 15}}>
                        <CustomButton variant={"s"} bgColor={"lightgrey"} onClick={() => showContacts(true)}>Qui
                            contacter?</CustomButton>
                        <Contacts   showContacts={contacts} 
                                    onHide={() => showContacts(false)} 
                                    question_id={item[0]}/>
                        <CustomButton variant={"s"} bgColor={"yellow"} onClick={() => showResources(true)}>Ressources</CustomButton>
                        <Resources  showResources={resources} 
                                    onHide={() => showResources(false)} 
                                    question_id={item[0]}/>
                    </div>
                </div>);
        });
        questions_render.unshift(
            <h3 style={{backgroundColor: COLORS[obj.color][label_tag]}} key={label_tag}>
                {labelSet.get(label_tag)}
            </h3>
        ); //prepending label
        return questions_render;
    };

    return (
        <div>
            {essential.size !== 0 ? displayQuestions(essential, labels, "essential") : ""}

            {important.size !== 0 ? displayQuestions(important, labels, "important") : ""}

            {less_important.size !== 0 ? displayQuestions(less_important, labels, "less_important") : ""}

            {already_filled.size !== 0 ? displayQuestions(already_filled, labels, "already_filled") : ""}
        </div>
    );
};

export default Result;
