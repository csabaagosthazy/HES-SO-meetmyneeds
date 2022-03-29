import React, { useEffect, useState } from "react";
import { Spinner, Card } from "react-bootstrap";
import { getQuestions } from "../../services/api/service";
import CustomPagination from "../pagination/Pagination";
import Question from "../question/Question";
import CustomButton from "../button/CustomButton";

//get questions by id and language
//error handling
//render question components
//split data array by pathology
//create pagination based on pathology

const Questionnaire = ({ id, lang }) => {
  const [origin, setOrigin] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageData, setPagedata] = useState("");
  const [givenAnswers, setGivenAnswers] = useState({}); // question: id, answer: string

  useEffect(() => {
    //call fetch
    let isMounted = true;
    (async () => {
      getQuestions(id, lang)
        .then((response) => JSON.parse(response))
        .then((obj) => {
          if (isMounted) {
            paginate(obj.questions);
            createAnswers(obj.questions);
            setOrigin(obj);
          }
        })
        .catch((err) => setError(err));
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Creates question-answers relation
   * @param {array} arr
   */
  const createAnswers = (arr) => {
    let answerObj = {};
    arr.forEach((question) => {
      answerObj = { ...answerObj, [question.question_id]: "" };
    });
    console.log(answerObj);
    setGivenAnswers({ ...answerObj });
  };
  /**
   * Creates pagination attributes
   * @param {array} dataArr
   */
  const paginate = (dataArr) => {
    //number of pages are dependent on how many subcategories we have
    //sub category label is needed for the headers
    const pages = [];
    dataArr.forEach((obj) => {
      if (!pages.some((page) => page.id === obj.sub_category_id))
        pages.push({ id: obj.sub_category_id, label: obj.sub_category_label });
    });
    setNumberOfPages(pages.length);
    const pagesData = [];
    pages.forEach((unique) =>
      pagesData.push({ ...unique, data: dataArr.filter((q) => q.sub_category_id === unique.id) })
    );
    //split data to arrays by subcategories
    setData(pagesData);
    setPagedata(pagesData[0]);
    console.log(pagesData);
  };
  /**
   * Sets current page for the pagination
   * @param {number} number
   */
  const setCurrentPage = (number) => {
    //gets a number from pagination, filter data to page data by sub_category
    setCurrentPageNumber(number);
    setPagedata(data[number - 1]);
  };

  const handleAnswer = (questionId, answer) => {
    setGivenAnswers({ ...givenAnswers, [questionId]: answer });
  };

  const handleFinish = () => {
    /*     const answers = [{
      question_id:1, 
      question:"Actually I need info about diagnostics",
      answer_id: 3,
      label:"a bit important",
      technicalKey: "medium"
  
  }]
   */
    const results = [];
    //{questionId : answer(string) }

    Object.entries(givenAnswers).forEach(([key, value]) => {
      let question = origin.questions.filter((q) => q.question_id === parseInt(key));
      const answer = Object.entries(origin.answers).find(([k, v]) => v.technicalKey === value);
      console.log(question);
      console.log(answer);
      let obj = {
        question_id: question[0].question_id,
        question: question[0].question,
        answer_id: answer ? answer[0] : -1,
        label: answer ? answer[1].label : "notAnwered",
        technicalKey: answer ? answer[1].technicalKey : "notanwered",
      };
      results.push(obj);
    });
    //create session store object
    //depends on the requirements

    const jObj = JSON.stringify(results);

    console.log(jObj);
    //call session store
    sessionStorage.setItem("answers", jObj);

    //go to result page
  };

  if (!pageData || !origin) return <Spinner animation="border" variant="primary" />;
  //renders the questions
  return (
    <Card>
      <Card.Header>{pageData.label}</Card.Header>
      {pageData.data.map((q) => (
        <Question
          key={q.question_id}
          name={q.question}
          subs={q.subquestions}
          id={q.question_id}
          answers={origin.answers}
          alreadySelected={givenAnswers[q.question_id]}
          handleSelect={handleAnswer}
        />
      ))}
      <Card.Footer>
        <CustomPagination
          pageNo={numberOfPages}
          currentPage={currentPageNumber}
          setCurrentPage={setCurrentPage}
          alwaysShown={true}
        />
        {currentPageNumber === numberOfPages ? (
          <CustomButton variant={"m"} bgColor={"lightBlue"} onClick={handleFinish}>
            Finish
          </CustomButton>
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default Questionnaire;

const uniqe = new Set();
