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
        'category_id', 'label', 'color_set'
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
})