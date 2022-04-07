const {getPool} = require("../pool");

module.exports = {
    /**
     * Fetch the main questions belonging to one category and in a specific language
     * @param {string} category_id Technical identifier of the category
     * @param {string} language Language to filter the questions by, such as fr, de, ...
     *
     * @returns {Promise<{question_id: string, question: string, question_set: number, sub_category_id: string, category_id: string}[]>}
     */
    get_main_questions_by_category: async (category_id, language) => {
        const pool = getPool();
        const result = await pool.query(
            `SELECT question_id, question, question_set, sub_category_id, category_id
             FROM questions q INNER JOIN languages l on q.lang_id = l.lang_id
             WHERE category_id = $1
               AND l.name = $2
             ORDER BY question_set`,
            [category_id, language]
        );

        return result.rows;
    },

    /**
     * Fetch the subcategories according to a main category ID
     * @param main_category_id Technical ID the the main category
     * @returns {Promise<{category_id, label}[]>}
     */
    get_subcategories_by_main_category: async (main_category_id) => {
        // The filtering by language is implicit with the main category ID already filtered
        // by language
        const pool = getPool();
        const result = await pool.query(
            `SELECT DISTINCT qsc.subcategory_id, qsc.label
             FROM question_subcategory qsc
                      INNER JOIN questions q on qsc.subcategory_id = q.sub_category_id
             WHERE q.category_id = $1`,
            [main_category_id]
        );

        return result.rows;
    },

    /**
     * Fetch the child questions according to multiple parent IDs and the language
     *
     * @param {string[]} parent_question_ids Array of question numbers (question_set attribute) to look for
     * @param {string} language Language to filter by
     * @returns {Promise<{question_id: string, question: string, parent_question_id: string}>}
     */
    get_child_questions_by_parents: async (parent_question_ids, language) => {
        const pool = getPool();
        // The `= ANY($1::bigint[])` construct is equivalent to `IN(..., ..., ...)`.
        // The first construct makes querying for n questions easier because we don't
        // have to dynamically generate the SQL query sent to the server.
        const result = await pool.query(
            `SELECT sq.subquestion_id, sq.subquestion, sq.parent_question_id
             FROM subquestions sq
             INNER JOIN languages l on sq.lang_id = l.lang_id
             WHERE sq.parent_question_id = ANY ($1::bigint[]) AND l.name = $2
             ORDER BY subquestion`,
            [parent_question_ids, language]
        );

        return result.rows;
    }
}