const {getPool} = require('../pool');

module.exports = {
    /**
     * Queries for main question categories, that is categories not associated to
     * the sub_category_id column in the question table.
     *
     * @param {string} language In which language to return the main categories, such as fr, de
     * @returns {Promise<{category_id: string, label: string, color_set: string}>}
     */
    get_main_categories: async (language) => {
        const pool = getPool();

        let results = await pool.query(
            `SELECT qc.category_id,
                    qc.label,
                    qc.question_category_color_set AS color_set
             FROM question_category qc
                INNER JOIN languages l on qc.lang_id = l.lang_id
             WHERE qc.question_category_color_set IS NOT NULL
                AND l.name = $1
             ORDER BY qc.label`,
            [language]
        )

        return results.rows;
    }
}