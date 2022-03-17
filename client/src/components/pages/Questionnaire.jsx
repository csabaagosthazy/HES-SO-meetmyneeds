import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/api/service";

const Questionnaire = ({ id, lang }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    //call fetch
    (async () => {
      getQuestions(id, lang)
        .then((response) => JSON.parse(response))
        .then((obj) => {
          setData(obj);
        })
        .catch((err) => setError(err));
    })();
  }, []);
  console.log("data", data);
  console.log("error", error);
  //renders the questions
  return <></>;
};

export default Questionnaire;
