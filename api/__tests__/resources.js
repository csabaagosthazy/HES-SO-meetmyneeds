const request = require('supertest');
const app = require('../application');

describe('resources API', () => {
    it('rejects missing ID parameter', async () => {
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

    test.each([
        'resource_id', 'name', 'url'
    ])('responds with a %s key', async (resource_key) => {
        const response = await request(app).get('/api/resources?question_id=1');
        expect(response.body[0]).toHaveProperty(resource_key);
    })

    it('returns right resources according to the question', async () => {
        const resources_for_question_id_1 = ["1", "2", "3"];
        const response = await request(app).get('/api/resources?question_id=1');
        const returned_resources_ids = response.body.map(r => r.resource_id);

        expect(returned_resources_ids.length).toEqual(resources_for_question_id_1.length)
        for(returned_resources_id of returned_resources_ids){
            expect(resources_for_question_id_1.indexOf(returned_resources_id)).not.toBe(-1);
        }
    })
})