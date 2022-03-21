import React from "react";

const Subquestion = ({ subquestions }) => {
  return (
    <div>
      {/*it is hardcoded for now: if this sentence is taken from DB/passed via props, need to be changed*/}
      <div>More precisely</div>
      {subquestions.map((subquestion, index) => {
        return (
          <div key={index}>
            <input type="checkbox" id={index} />
            <label key={index}>{subquestion.question}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Subquestion;
