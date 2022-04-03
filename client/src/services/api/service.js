import {categories, contacts, questions, resources} from "./urls";

export const getQuestions = async (id, lang) => {
    const url = `${questions}/?category=${id}&language=${lang}`;
    const result = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return result;
};

export const getCategories = async (lang) => {
    const url = `${categories}?language=${lang}`;
    const result = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return result;
};

export const getContacts = async (id) => {
    const url = `${contacts}/?question_id=${id}`;
    const result = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return result;
}

export const getResources = async (id) => {
    const url = `${resources}/?question_id=${id}`;
    const result = await fetch(url)
        .then((res) => res.json)
        .catch((err) => console.log(err));
    return result;
}