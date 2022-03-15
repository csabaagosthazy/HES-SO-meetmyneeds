const request = require('supertest');
const { Response } = require('superagent');
const app = require('../application');

describe("database interaction 101", () => {
    it("should return 200", async () => {
        /** @type Response */
        const response = await request(app).get('/api/db-test');
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toMatch(/^application\/json/);
    })

    it("should return one per the SQL query", async () => {
        /** @type Response */
        const response = await request(app).get('/api/db-test');
        expect(response.body.result).toEqual(1);
    })
})