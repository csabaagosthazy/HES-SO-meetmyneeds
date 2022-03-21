import React from "react";

const Subquestion = (props) => {
  return (
    <div>
      {/*it is hardcoded for now: if this sentence is taken from DB/passed via props, need to be changed*/}
      <div>Plus précisement</div>
      {props.subquestions.map((subquestion, index) => {
        return (
          <div>
            <input type="checkbox" id={index} />
            <label key={index}>{subquestion}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Subquestion;
