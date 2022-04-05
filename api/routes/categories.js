const {get_main_categories} = require("../database/repository/category");

module.exports = {
    fetch_categories: async (req, res) => {
        let language = req.query.language;

        if(language === undefined || language.length === 0){
            return res.status(400)
                .send('Missing language GET parameter')
        }

        let results = await get_main_categories(language);

        res.status(200)
            .setHeader('Content-Type', 'application/json')
            .send(JSON.stringify(results))
    }
}