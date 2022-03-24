const {getPool} = require("../pool");

module.exports = {
    get_main_questions_by_category: async (category_id) => {
        const pool = getPool();
        const result = await pool.query(
            `SELECT question_id, question, question_set, sub_category_id
             FROM questions
             WHERE category_id = $1
               AND parent_question_id IS NULL
             ORDER BY question_set`,
            [category_id]
        );

        return result.rows;
    },

    get_subcategories_by_main_category: async (main_category_id) => {
        const pool = getPool();
        const result = await pool.query(
            `SELECT DISTINCT qc.category_id, qc.label
             FROM question_category qc
                      INNER JOIN questions q on qc.category_id = q.sub_category_id
             WHERE q.category_id = $1`,
            [main_category_id]
        );

        return result.rows;
    },

    get_child_questions_by_parents: async (parent_question_ids) => {
        const pool = getPool();
        const result = await pool.query(
            `SELECT question_id, question, parent_question_id
             FROM questions
             WHERE parent_question_id = ANY ($1::bigint[])
             ORDER BY question`,
            [parent_question_ids]
        );

        return result.rows;
    }
}