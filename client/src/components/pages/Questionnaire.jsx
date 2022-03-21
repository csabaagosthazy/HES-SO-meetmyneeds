import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getQuestions } from "../../services/api/service";
import CustomPagination from "../pagination/Pagination";
import Question from "../question/Question";

//get questions by id and language
//error handling
//render question components
//split data array by pathology
//create pagination based on pathology

const Questionnaire = ({ id, lang }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageData, setPagedata] = useState("");

  useEffect(() => {
    //call fetch
    (async () => {
      getQuestions(id, lang)
        .then((response) => JSON.parse(response))
        .then((arr) => {
          paginate(arr);
        })
        .catch((err) => setError(err));
    })();
  }, []);

  /**
   * Creates pagination attributes
   * @param {array} dataArr
   */
  const paginate = (dataArr) => {
    //number of pages are dependent on how many subcategories we have
    const pages = new Set();
    dataArr.forEach((obj) => pages.add(obj.sub_category_id));
    setNumberOfPages(pages.size);
    const pagesData = [];
    Array.from(pages).forEach((unique) =>
      pagesData.push(dataArr.filter((q) => q.sub_category_id === unique))
    );
    //split data to arrays by subcategories
    setData(pagesData);
    setPagedata(pagesData[0]);
  };

  const setCurrentPage = (number) => {
    //gets a number from pagination, filter data to page data by sub_category
    setCurrentPageNumber(number);
    setPagedata(data[number - 1]);
  };
  console.log(currentPageNumber);
  console.log("data", pageData);
  console.log("error", error);

  if (!pageData) return <Spinner animation="border" variant="primary" />;
  //renders the questions
  return (
    <div>
      {pageData.map((q, i) => (
        <Question key={i} name={q.question} subs={q.subquestions} id={q.question_id} />
      ))}
      <CustomPagination
        pageNo={numberOfPages}
        currentPage={currentPageNumber}
        setCurrentPage={setCurrentPage}
        alwaysShown={true}
      />
    </div>
  );
};

export default Questionnaire;
