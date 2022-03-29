const {getPool} = require("../pool");
module.exports = {
    get_answers: async () => {
        const pool = getPool();
        const results = await pool.query(
            `SELECT answer_id, technical_key, label FROM answers`
        );

        return results.rows;
    }
}