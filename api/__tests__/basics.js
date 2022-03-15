const request = require('supertest');
const { Response } = require('superagent');
const app = require('../application');

describe("Test root path", () => {
    it("should return 200", async () => {
        /** @type Response */
        const response = await request(app).get("/api");
        expect(response.status).toEqual(200);
    });

    it('should set the content-type to JSON', async () => {
        /** @type Response */
        const response = await request(app).get("/api")
        expect(response.headers['content-type']).toMatch(/^application\/json/)
        expect(response.body).toEqual({})
    })
})