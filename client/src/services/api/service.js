import {categories, contacts, questions, resources} from "./urls";

const fetch_json_payload = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        // Rethrow the error so the caller can be aware that something wrong has happened
        // while querying the URL passed in parameter.

        // If we don't rethrow, we would silence the error and the caller,
        // unaware of what's going on, will act like something is talking a very long time
        // to load.
        throw e;
    }
}

export const getQuestions = (id, lang) => fetch_json_payload(`${questions}/?category=${id}&language=${lang}`);

export const getCategories = (lang) => fetch_json_payload(`${categories}?language=${lang}`);

export const getContacts = (id) => fetch_json_payload(`${contacts}/?question_id=${id}`);

export const getResources = (id) => fetch_json_payload(`${resources}/?question_id=${id}`);