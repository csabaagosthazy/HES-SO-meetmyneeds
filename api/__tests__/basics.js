const request = require('supertest');
const { Response: TestResponse } = require('superagent');
const app = require('../application');

describe("Test root path", () => {
    it("should return 200", async () => {
        /** @type TestResponse */
        const response = await request(app).get("/api");
        expect(response.status).toEqual(200);
    });

    it('should set the content-type to JSON', async () => {
        /** @type TestResponse */
        const response = await request(app).get("/api")
        expect(response.headers['content-type']).toMatch(/^application\/json/)
    })
})