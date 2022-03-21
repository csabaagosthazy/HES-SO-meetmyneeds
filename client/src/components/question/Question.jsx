import React, { useContext } from "react";
import * as commonmark from "commonmark";

import { Accordion, AccordionContext, Button, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import Subquestion from "./SubQuestion";
import CustomButtonGroup from "../button/CustomButtonGroup";

const Question = (props) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const question_to_parse = reader.parse(props.name);
  const question_to_display = writer.render(question_to_parse);

  const obj = {
    a: "important",
    b: "essential",
    c: "less important",
    d: "not important",
    e: "done",
    f: "not may concern",
  };

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => console.log("eventKey", eventKey));
    const handleClick = (event) => {
      console.log(event);
      decoratedOnClick();
    };

    return <CustomButtonGroup variant={"blueSet"} textObj={obj} onClick={handleClick} />;
  };
  return (
    <Accordion alwaysOpen>
      <Card>
        <Card.Header>
          <h1 dangerouslySetInnerHTML={{ __html: question_to_display }} />
          <CustomToggle eventKey={props.id} />
        </Card.Header>
        <Accordion.Collapse eventKey={props.id}>
          <Card.Body>
            <Subquestion subquestions={props.subs} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const questionStyle = {
  color: "#0f0d06",
};

const questionName = {
  fontWeight: "bold",
};

export default Question;
