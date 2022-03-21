import React from "react";
import * as commonmark from "commonmark";

const Question = (props) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const question_to_parse = reader.parse(props.name);
  const question_to_display = writer.render(question_to_parse);
  return <div dangerouslySetInnerHTML={{ __html: question_to_display }} />;
};

const questionStyle = {
  color: "#0f0d06",
};

const questionName = {
  fontWeight: "bold",
};

export default Question;
