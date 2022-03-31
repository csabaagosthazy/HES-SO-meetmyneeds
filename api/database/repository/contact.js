const {getPool} = require('../pool');

module.exports = {
    /**
     * Queries for contacts related to one question
     *
     * @returns {Promise<{service_id: int, question_id: int, serviceName: string, description: string, organizationName: string, address: string}>}
     */
    get_question_contacts: async (question_id) => {
        const pool = getPool();

        let results = await pool.query(
            `SELECT sq.service_id, sq.question_id,
                    s.name as "serviceName", s.description,
                    o.name as "organizationName", o.address
            FROM service_question sq
                      INNER JOIN services s
            on sq.service_id = s.service_id
                      INNER JOIN organizations o
            on s.organization_id = o.organization_id
             WHERE sq.question_id = $1
             ORDER BY sq.question_id`,
            [question_id]
        );

        return results.rows;
    }
}