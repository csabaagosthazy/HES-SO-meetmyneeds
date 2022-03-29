const {getPool} = require('../pool');

module.exports = {
    /**
     * Queries for main question categories, that is categories not associated to
     * the sub_category_id column in the question table.
     *
     * @returns {Promise<{category_id: string, label: string, color_set: string}>}
     */
    get_main_categories: async () => {
        const pool = getPool();

        let results = await pool.query(
            `SELECT qc.category_id,
                    qc.label,
                    qc.question_category_color_set AS color_set
             FROM question_category qc
             WHERE qc.question_category_color_set IS NOT NULL
             ORDER BY qc.label`
        )

        return results.rows;
    }
}