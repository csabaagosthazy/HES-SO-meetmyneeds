const {get_question_resources} = require("../database/repository/resource");

module.exports = {
    /**
     * Fetch the resources related to one specific question, specified in the
     * GET parameter `question_id`.
     *
     * The parameters and the returned JSON document structure can be found
     * at `~/api/documentation/openapi.yaml`.
     */
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