import React from "react";
import { Form } from "react-bootstrap";

const Subquestion = ({ subquestions }) => {
  return (
    <Form>
      {/*it is hardcoded for now: if this sentence is taken from DB/passed via props, need to be changed*/}
      <Form.Label>More precisely</Form.Label>
      {subquestions.map(({ question_id, question }) => (
        <Form.Check
          key={question_id}
          type={"checkbox"}
          id={`checkbox${question_id}`}
          label={question}
        />
      ))}
    </Form>
  );
};

export default Subquestion;
