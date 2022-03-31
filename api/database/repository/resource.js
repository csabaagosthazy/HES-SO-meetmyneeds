const {getPool} = require('../pool');

module.exports = {
    /**
     * Queries for ressources related to one question
     *
     * @returns {Promise<{question_id: int, resource_id: int, name: string, url:string}>}
     */
    get_question_resources: async (question_id) => {
        const pool = getPool();

        let results = await pool.query(
            `SELECT rq.question_id,
                    rq.resource_id,
                    r.name,
                    r.url
             FROM resource_question rq
                      INNER JOIN resources r
             on rq.resource_id = r.resource_id
             WHERE rq.question_id = $1
             ORDER BY rq.question_id`,
            [question_id]
        );

        return results.rows;
    }
}