const express = require("express");
const router = express.Router();
const {getPool} = require('../database/pool');
const {
    get_main_questions_by_category,
    get_subcategories_by_main_category,
    get_child_questions_by_parents
} = require("../database/repository/question");
const {get_answers} = require("../database/repository/answer");
const {get_main_categories} = require("../database/repository/category");

router.get("/", async (req, res) => {
  res.status(200)
      .setHeader("Content-Type", "application/json")
      .send(JSON.stringify({}));
});

router.get("/db-test", async (req, res) => {
    let pool = getPool();
    let result = await pool.query("SELECT 1 AS one");

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify({ result: result.rows[0].one }))
})

router.get('/categories', async (req, res) => {
    let results = await get_main_categories();

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify(results))
});

router.get('/questions', async (req, res) => {
    const category_id = req.query.category;
    const language = req.query.language;
    if(category_id === undefined || category_id.length < 1 || language === undefined){
        // 400 Bad Request since we need that parameter
        return res.status(400).end('GET parameter category and language is missing');
    }

    const main_questions = await get_main_questions_by_category(category_id, language);
    const child_questions = await get_child_questions_by_parents(main_questions.map(q => q.question_id))
    const subcategories = await get_subcategories_by_main_category(category_id);
    const answers = await get_answers();

    let response_payload = {
        subcategories: subcategories,
        questions: main_questions.map(
            question => ({
                ...question,
                order: question.question_set,
                children: child_questions.filter(cq => cq.parent_question_id === question.question_id)
            })
        ),
        answers: Object.fromEntries(
            answers.map(ans => [
                ans.answer_id,
                {
                    technicalKey: ans.technical_key,
                    label: ans.label
                }
            ])
        )
    };

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify(response_payload));
})

module.exports = router;
