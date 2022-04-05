const {get_question_resources} = require("../database/repository/resource");

module.exports = {
    fetch_resources: async (req, res) => {
        let question_id = req.query.question_id;

        if(question_id === undefined || question_id.length === 0){
            return res.status(400).send('Missing question_id GET parameter');
        }

        let results = await get_question_resources(question_id);

        res.status(200)
            .setHeader('Content-Type', 'application/json')
            .send(JSON.stringify(results));
    }
}