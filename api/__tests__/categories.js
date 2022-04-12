const request = require('supertest');
const app = require('../application');
const {getPool} = require("../database/pool");

describe('categories API', () => {
    it('rejects missing language parameter', async () => {
        const response = await request(app).get('/api/categories');
        expect(response.status).toEqual(400);
    })

    it('accepts correct request', async () => {
        const response = await request(app).get('/api/categories?language=de');
        expect(response.status).toEqual(200);
    })

    it('returns a JSON payload', async () => {
        const response = await request(app).get('/api/categories?language=fr');
        expect(response.headers['content-type']).toMatch(/^application\/json/);

        try{
            JSON.parse(response.text);
        } catch (e) {
            fail("Response payload is not JSON.parse-able");
        }
    })

    test.each([
        'category_id', 'label', 'color_set', 'questions_number'
    ])('responds with a %s key', async (attr) => {
        const response = await request(app).get('/api/categories?language=fr');
        expect(response.body[0]).toHaveProperty(attr);
    })

    it('returns categories in the requested language', async () => {
        const german_category_ids = ["5", "6", "7", "8"];
        const response = await request(app).get('/api/categories?language=de');
        const returned_category_ids = response.body.map(c => c.category_id);

        expect(returned_category_ids.length).toEqual(german_category_ids.length)
        for(returned_category_id of returned_category_ids){
            expect(german_category_ids.indexOf(returned_category_id)).not.toBe(-1);
        }
    })

    it('returns question_number for the right categories', async () => {
        const expected_number_of_questions_per_category = ["9", "6", "16", "2"];
        const response = await request(app).get('/api/categories?language=fr');
        const returned_number_of_questions_per_category = Object.values(response.body).map(q => q.questions_number);

        expect(returned_number_of_questions_per_category.length).toEqual(expected_number_of_questions_per_category.length)
        for(const returned_response_number of returned_number_of_questions_per_category){
            expect(expected_number_of_questions_per_category.indexOf(returned_response_number)).not.toBe(-1);
        }
    })
})