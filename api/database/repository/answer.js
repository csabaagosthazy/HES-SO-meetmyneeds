const {getPool} = require("../pool");
module.exports = {
    get_answers: async (language) => {
        const pool = getPool();
        const results = await pool.query(
            `SELECT answer_id, technical_key, label 
            FROM answers a INNER JOIN languages l on a.lang_id = l.lang_id 
            WHERE l.name = $1 AND a.technical_key NOT IN ('yes', 'no')`,
            [language]
        );

        return results.rows;
    }
}