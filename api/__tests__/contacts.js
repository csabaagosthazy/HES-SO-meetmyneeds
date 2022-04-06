const request = require('supertest');
const app = require('../application');

describe('resources API', () => {
    it('rejects missing ID parameter', async () => {
        const response = await request(app).get('/api/contacts');
        expect(response.status).toEqual(400);
    })

    it('accepts correct request', async () => {
        const response = await request(app).get('/api/contacts?question_id=1');
        expect(response.status).toEqual(200);
    })

    it('returns a JSON payload', async () => {
        const response = await request(app).get('/api/contacts?question_id=1');
        expect(response.headers['content-type']).toMatch(/^application\/json/);

        try{
            JSON.parse(response.text);
        } catch (e) {
            fail("Response payload is not JSON.parse-able");
        }
    })

    test.each([
        'service_id', 'serviceName', 'organizationName', 'description',
        'address', 'question_id'
    ])('responds with a %s key', async (attr) => {
        const response = await request(app).get('/api/contacts?question_id=1');
        expect(response.body[0].hasOwnProperty(attr)).toBe(true);
    });

    it('returns right contacts according to the question', async () => {
        const contacts_for_question_id_1 = ["1", "2"];
        const response = await request(app).get('/api/contacts?question_id=1');
        const returned_contacts_ids = response.body.map(r => r.service_id);

        expect(returned_contacts_ids.length).toEqual(contacts_for_question_id_1.length)
        for(returned_contacts_id of returned_contacts_ids){
            expect(contacts_for_question_id_1.indexOf(returned_contacts_id)).not.toBe(-1);
        }
    })
})