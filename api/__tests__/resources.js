const request = require('supertest');
const app = require('../application');
const {getPool} = require("../database/pool");

describe('resources API', () => {
    it('rejects missing language parameter', async () => {
        const response = await request(app).get('/api/resources');
        expect(response.status).toEqual(400);
    })

    it('accepts correct request', async () => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.status).toEqual(200);
    })

    it('returns a JSON payload', async () => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.headers['content-type']).toMatch(/^application\/json/);

        try{
            JSON.parse(response.text);
        } catch (e) {
            fail("Response payload is not JSON.parse-able");
        }
    })

    it('responds with a resource_id key', async () => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.body[0].hasOwnProperty('resource_id')).toBe(true);
    })

    it('responds with a name key', async () => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.body[0].hasOwnProperty('name')).toBe(true);
    })

    it('responds with a url key', async () => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.body[0].hasOwnProperty('url')).toBe(true);
    })


})