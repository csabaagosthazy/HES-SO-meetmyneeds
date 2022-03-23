import React, { useEffect, useState } from "react";
import * as commonmark from "commonmark";

import { Accordion, Card, Collapse } from "react-bootstrap";

import Subquestion from "./SubQuestion";
import CustomButtonGroup from "../button/CustomButtonGroup";

/**
 * Question component
 *
 * @param {string} props.name - Title of the question
 * @param {array} props.subs - Sub questions array
 * @param {number} props.id - Id of the question
 * @param {object} props.answers - Answer object, shows on the buttons
 * @param {string} props.alreadySelected - Existing answer if selected before
 * @param {function} props.handleSelect - Handle button selection
 * @returns Question component
 */
const Question = ({ name, subs, id, answers, alreadySelected, handleSelect }) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const question_to_parse = reader.parse(name);
  const question_to_display = writer.render(question_to_parse);

  const [open, setOpen] = useState(true);

  const handleClick = (selected) => {
    if (selected === "essential" || selected === "important" || selected === "medium") {
      setOpen(true);
    } else {
      setOpen(false);
    }
    //call parent function to store answers
    handleSelect(id, selected);
  };

  return (
    <Accordion alwaysOpen>
      <Card>
        <Card.Header>
          <h1 dangerouslySetInnerHTML={{ __html: question_to_display }} />
          <CustomButtonGroup
            variant={"blueSet"}
            textObj={answers}
            alreadySelected={alreadySelected}
            onClick={handleClick}
          />
        </Card.Header>
        <Collapse in={open}>
          <Card.Body>
            <Subquestion subquestions={subs} />
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
