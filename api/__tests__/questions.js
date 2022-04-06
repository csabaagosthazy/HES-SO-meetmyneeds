const request = require('supertest');
const app = require('../application');

describe("questions API", () => {
    it('rejects missing category parameter', async () => {
        const response = await request(app).get('/api/questions?language=fr');
        expect(response.status).toEqual(400);
    })

    it('rejects missing language parameter', async () => {
        const response = await request(app).get('/api/questions?category=3');
        expect(response.status).toEqual(400);
    })

    test.each([
        'questions', 'answers', 'subcategories'
    ])('sends the property [%s] in the response', async (prop) => {
        const response = await request(app).get('/api/questions?category=1&language=fr');
        expect(response.body).toHaveProperty(prop);
    })

    it('orders the questions correctly', async () => {
        const response = await request(app).get('/api/questions?category=2&language=fr');
        const question_placement = response.body.questions.map(q => q.order);

        let previous_question_order = 0;
        for (const position of question_placement) {
            expect(previous_question_order).toBeLessThan(position);
            previous_question_order = position;
        }
    })

    it('filters main questions by category', async () => {
        const response = await request(app).get('/api/questions?category=3&language=fr');
        const main_question_category_ids = response.body.questions.map(q => q.category_id);

        for(const category_id of main_question_category_ids){
            expect(category_id).toEqual("3");
        }
    })

    test.each([
        'question_id', 'question', 'sub_category_id',
        'sub_category_label', 'subquestions'
    ])('returns required attributes on questions (%s)', async (attr) => {
        const response = await request(app).get('/api/questions?category=3&language=fr');
        const question_obj = response.body.questions[0];
        expect(question_obj.hasOwnProperty(attr)).toBeTruthy();
    });

    test.each([
        'question_id', 'question'
    ])('returns required attributes on sub-questions (%s)', async (attr) => {
        const response = await request(app).get('/api/questions?category=3&language=fr');
        const question_obj = response.body.questions[0].subquestions[0];
        expect(question_obj.hasOwnProperty(attr)).toBeTruthy();
    });

    it('groups child questions correctly', async () => {
        const response = await request(app).get('/api/questions?category=1&language=fr');

        for(const question of response.body.questions){
            const question_id = question.question_id;

            for(const child of question.subquestions){
                expect(child.parent_question_id).toEqual(question_id);
            }
        }
    })

    it('returns the sub-questions in the right language', async () => {
        const accepted_subquestion_ids = ["89", "90", "91"];

        const response = await request(app).get('/api/questions?category=3&language=fr');
        // We test on question with ID 16
        const question = response.body.questions.find(q => q.question_id === '16');
        const returned_subquestions = question.subquestions.map(sq =>sq.question_id);

        for(const returned_question_id of returned_subquestions){
            expect(accepted_subquestion_ids.indexOf(returned_question_id)).not.toBe(-1);
        }
    })

    it('returns the needed subcategories', async () => {
        const response = await request(app).get('/api/questions?category=3&language=fr');
        const returned_subcategories = new Set(response.body.subcategories.map(c => c.category_id));
        const needed_subcategories = new Set(response.body.questions.map(q => q.sub_category_id));

        for(const subcategory_id of needed_subcategories){
            expect(returned_subcategories.has(subcategory_id)).toBeTruthy();
        }
    })

    it('sends answers in the requested language', async () => {
        const german_labels = [
            'essential',
            'wichtig',
            'ein wenig wichtig',
            'überhaupt nicht wichtig',
            'Bedürfnis bereits erfüllt',
            'nicht betroffen',
        ];

        const response = await request(app).get('/api/questions?category=13&language=de');
        const returned_answer_labels = Object.values(response.body.answers).map(a => a.label);

        expect(returned_answer_labels.length).toBe(german_labels.length);
        for(const returned_label of returned_answer_labels){
            expect(german_labels.indexOf(returned_label)).not.toBe(-1);
        }
    })

    test.each([
        'yes', 'no'
    ])('does not return the %s answer technical key', async (rejected_technical_key) => {
        const response = await request(app).get('/api/questions?category=13&language=de');
        const returned_technical_keys = Object.values(response.body.answers).map(a => a.technicalKey);
        expect(returned_technical_keys.indexOf(rejected_technical_key)).toBe(-1);
    });
})