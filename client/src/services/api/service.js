import { categories, questions } from "./urls";

const dummyQuestions = {
  questions: [
    {
      id: 1,
      question: "1. What is the **meaning of life?",
      //....
      subquestions: [
        { id: 11, question: "11. Are you sure?" /*....*/ },
        { id: 12, question: "12. Are you really sure?" /*....*/ },
        { id: 13, question: "13. Have you think about it?" /*....*/ },
      ],
    },
    {
      id: 2,
      question: "2. What is the **meaning of life?",
      //....
      subquestions: [
        { id: 21, question: "21. Are you sure?" /*....*/ },
        { id: 22, question: "22. Are you really sure?" /*....*/ },
        { id: 23, question: "23. Have you think about it?" /*....*/ },
      ],
    },
    {
      id: 3,
      question: "3. What is the **meaning of life?",
      //....
      subquestions: [
        { id: 31, question: "31. Are you sure?" /*....*/ },
        { id: 32, question: "32. Are you really sure?" /*....*/ },
        { id: 33, question: "33. Have you think about it?" /*....*/ },
      ],
    },
  ],
  answers: {},
};
export const getQuestions = async (id, lang) => {
  const url = `${questions}/?category=${id}&language=${lang}`;
  const result = JSON.stringify(dummyQuestions);
  /* await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err)); */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return result;
};

export const getCategories = async (id, lang) => {
  const url = `${categories}/?pathology=${id}&language=${lang}`;
  const result = "";
  //return fetch(url);
  return result;
};
