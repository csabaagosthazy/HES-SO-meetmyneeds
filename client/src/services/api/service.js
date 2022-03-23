import { categories, questions } from "./urls";

const dummyQuestionGenerator = (numberOfQuestions) => {
  let questions = [];

  for (let i = 1; i <= numberOfQuestions; i++) {
    let question =
      i % 2 === 0 ? "What is the **meaning of life?**" : "What **is the** meaning of life?";
    let subCategoryId = Math.floor(Math.random() * 4) + 1;
    let subCategoryLabel = "Sub category title";

    let questionObj = {
      question_id: i,
      question,
      sub_category_id: subCategoryId,
      sub_category_label: subCategoryLabel,
      //....
      subquestions: [
        { question_id: i * 10 + 1, question: "Are you sure?" /*....*/ },
        { question_id: i * 10 + 2, question: "Are you really sure?" /*....*/ },
        { question_id: i * 10 + 3, question: "Have you think about it?" /*....*/ },
      ],
    };
    questions.push(questionObj);
  }
  let answers = {
    1: {
      technicalKey: "essential",
      label: "Essential",
    },
    2: {
      technicalKey: "important",
      label: "Important",
    },
    3: {
      technicalKey: "medium",
      label: "Somewhat important",
    },
    4: {
      technicalKey: "low",
      label: "Not important",
    },
    5: {
      technicalKey: "done",
      label: "Need already met",
    },
    6: {
      technicalKey: "none",
      label: "Not concerned",
    },
  };
  let colorSet = {};
  return { questions, answers, colorSet };
};

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
};
export const getQuestions = async (id, lang) => {
  const url = `${questions}/?category=${id}&language=${lang}`;
  const result = JSON.stringify(dummyQuestionGenerator(10));
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
