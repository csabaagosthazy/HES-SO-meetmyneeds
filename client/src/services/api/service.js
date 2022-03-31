import { categories, questions } from "./urls";

const dummyQuestions = {
  questions: [
    {
      question_id: 1,
      question: "1. What is the **meaning of life?**",
      sub_category_id: 1,
      sub_category_label: 1,
      //....
      subquestions: [
        { question_id: 11, question: "11. Are you sure?" /*....*/ },
        { question_id: 12, question: "12. Are you really sure?" /*....*/ },
        { question_id: 13, question: "13. Have you think about it?" /*....*/ },
      ],
    },
    {
      question_id: 2,
      question: "2. What **is the** meaning of life?",
      sub_category_id: 2,
      sub_category_label: 2,
      //....
      subquestions: [
        { question_id: 21, question: "21. Are you sure?" /*....*/ },
        { question_id: 22, question: "22. Are you really sure?" /*....*/ },
        { question_id: 23, question: "23. Have you think about it?" /*....*/ },
      ],
    },
    {
      question_id: 3,
      question: "3. **What is the** meaning of life?",
      sub_category_id: 3,
      sub_category_label: 3,
      //....
      subquestions: [
        { question_id: 31, question: "31. Are you sure?" /*....*/ },
        { question_id: 32, question: "32. Are you really sure?" /*....*/ },
        { question_id: 33, question: "33. Have you think about it?" /*....*/ },
      ],
    },
  ],
  answers: {},
  color: "yellow",
};
export const getQuestions = async (id, lang) => {
  const url = `${questions}/?category=${id}&language=${lang}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result;
};

export const getCategories = async (lang) => {
  const url = `${categories}?language=${lang}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result;
};
