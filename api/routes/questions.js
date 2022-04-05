const {
    get_main_questions_by_category,
    get_child_questions_by_parents,
    get_subcategories_by_main_category
} = require("../database/repository/question");
const {get_answers} = require("../database/repository/answer");

module.exports = {
    /**
     * Fetch the main questions, child questions of main questions, answers
     * and child categories of one main category.
     *
     * The parameters and the returned JSON document structure can be found
     * at `~/api/documentation/openapi.yaml`.
     */
    fetch_questions: async (req, res) => {
        const category_id = req.query.category;
        const language = req.query.language;
        if(category_id === undefined || category_id.length < 1 || language === undefined){
            // 400 Bad Request since we need that parameter
            return res.status(400).end('GET parameter category and language is missing');
        }

        const main_questions = await get_main_questions_by_category(category_id, language);
        const child_questions = await get_child_questions_by_parents(main_questions.map(q => q.question_id), language)
        const subcategories = await get_subcategories_by_main_category(category_id);
        const answers = await get_answers(language);

        let response_payload = {
            subcategories: subcategories,
            // There are certainly lots of attributes that are not necessary in this object, although it
            // facilitates testing for correctness of the returned object in the relevant tests
            questions: main_questions.map(
                question => ({
                    ...question,
                    order: question.question_set,
                    sub_category_label: subcategories.find(sc => sc.category_id === question.sub_category_id).label,
                    subquestions: child_questions.filter(cq => cq.parent_question_id === question.question_id)
                })
            ),
            // Object.fromEntries is used to make an object from [id, {answer}]
            // such as the final structure of this item will be {id: {answer}}.
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
    }
}