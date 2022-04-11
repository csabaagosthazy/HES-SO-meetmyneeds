import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
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

const Questionnaire = () => {
  let navigate = useNavigate();
  let { id, lang, colorSet } = useParams();

  const [origin, setOrigin] = useState("");
  // Array of subcategories with their respective questions
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  // Present subcategory shown to the user
  const [pageData, setPagedata] = useState("");
  const [givenAnswers, setGivenAnswers] = useState({}); // question: id, answer: string

  useEffect(() => {
    (async () => {
      try {
        const response = await getQuestions(id, lang);
        paginate(response.questions);
        createAnswers(response.questions);
        setOrigin(response);
      } catch (err){
        setError(err);
      }
    })();
  }, [id, lang]);

  /**
   * Creates question-answers relation
   * @param {array} arr
   */
  const createAnswers = (arr) => {
    let answerObj = Object.fromEntries(arr.map(question => [question.question_id, ""]));
    setGivenAnswers(answerObj);
  };

  /**
   * Creates pagination attributes
   * @param {array} main_questions The array of main questions returned by the API
   */
  const paginate = (main_questions) => {
    const pages = [];

    // For each main question in the array of main questions, check if its subcategory is present in the array of pages.
    // The pages array determines how many pages are present -- one page contains one subcategory with its questions --
    // and the titles of the subcategory
    main_questions.forEach((main_question) => {
      if (!pages.some((page) => page.id === main_question.sub_category_id))
        pages.push({ id: main_question.sub_category_id, label: main_question.sub_category_label });
    });

    setNumberOfPages(pages.length);

    // Put the questions into the object representing the subcategory
    const pagesData = pages.map(page => ({...page, data: main_questions.filter(q => q.sub_category_id === page.id)}));

    setData(pagesData);
    setPagedata(pagesData[0]); // Show the first subcategory to the user
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
    const results = [];
    //{questionId : answer(string) }

    Object.entries(givenAnswers).forEach(([question_id, answer_technical_key]) => {
      console.log(question_id, answer_technical_key);
      let question = origin.questions.find(q => parseInt(q.question_id) === parseInt(question_id));
      const answer = Object.values(origin.answers).find((answer) => answer.technicalKey === answer_technical_key);

      let obj = {
        question_id: question.question_id,
        question: question.question,
        answer_id: answer ? answer[0] : -1,
        label: answer ? answer.label : "notAnwered",
        technicalKey: answer ? answer.technicalKey : "notanwered",
      };

      results.push(obj);
    });

    // Create session store object and store it in the sessionStorage
    const serializedAnswers = JSON.stringify({ color: colorSet, results });
    sessionStorage.setItem("answers", serializedAnswers);

    // Send the user to the results page where they will be displayed
    navigate("/results");
  };

  if (!pageData || !origin) return <Spinner animation="border" variant="primary" />;
  //renders the questions
  return (
    <Card>
      <Card.Header><h1>{pageData.label}</h1></Card.Header>
      {pageData.data.map((q) => (
        <Question
          key={q.question_id}
          name={q.question}
          subs={q.subquestions}
          id={q.question_id}
          answers={origin.answers}
          colorSet={colorSet}
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
