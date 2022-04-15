import React, { useState } from "react";

import { Accordion, Card, Collapse } from "react-bootstrap";

import Subquestion from "./SubQuestion";
import CustomButtonGroup from "../button/CustomButtonGroup";
import markdown_render from "../../helpers/markdown_render";

/**
 * Question component
 *
 * @param {string} name - Title of the question
 * @param {array} subs - Sub questions array
 * @param {number} id - Id of the question
 * @param {object} answers - Answer object, shows on the buttons
 * @param {object} colorSet
 * @param {string} alreadySelected - Existing answer if selected before
 * @param {function} handleSelect - Handle button selection
 * @returns Question component
 */
const Question = ({ name, subs, id, answers, colorSet, alreadySelected, handleSelect }) => {
  const [open, setOpen] = useState(true);

  const handleClick = (selected) => {
    if (selected === "essential" || selected === "important" || selected === "less_important") {
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
        <Card.Header className="question">
          <h2 dangerouslySetInnerHTML={{ __html: markdown_render(name) }} />
          <CustomButtonGroup
            variant={colorSet}
            textObj={answers}
            alreadySelected={alreadySelected}
            onClick={handleClick}
          />
        </Card.Header>
        {subs && (
          <Collapse in={open}>
            <Card.Body className="subquestion">
              <Subquestion subquestions={subs} />
            </Card.Body>
          </Collapse>
        )}
      </Card>
    </Accordion>
  );
};

export default Question;
