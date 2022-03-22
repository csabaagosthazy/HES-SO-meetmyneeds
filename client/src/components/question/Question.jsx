import React, { useState } from "react";
import * as commonmark from "commonmark";

import { Accordion, Card, Collapse } from "react-bootstrap";

import Subquestion from "./SubQuestion";
import CustomButtonGroup from "../button/CustomButtonGroup";

const Question = (props) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const question_to_parse = reader.parse(props.name);
  const question_to_display = writer.render(question_to_parse);

  const [open, setOpen] = useState(true);

  const obj = {
    essential: "Essential",
    important: "Important",
    medium: "Somewhat important",
    low: "Not important",
    done: "Need already met",
    none: "Not concerned",
  };

  const handleClick = (selected) => {
    if (selected === "essential" || selected === "important" || selected === "medium")
      setOpen(true);
    else setOpen(false);
    //call parent function to store answers
  };

  return (
    <Accordion alwaysOpen>
      <Card>
        <Card.Header>
          <h1 dangerouslySetInnerHTML={{ __html: question_to_display }} />
          <CustomButtonGroup variant={"blueSet"} textObj={obj} onClick={handleClick} />
        </Card.Header>
        <Collapse in={open}>
          <Card.Body>
            <Subquestion subquestions={props.subs} />
          </Card.Body>
        </Collapse>
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
