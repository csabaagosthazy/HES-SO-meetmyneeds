-- migrate:up

CREATE TABLE subquestions
(
    subquestion_id   bigint GENERATED ALWAYS AS IDENTITY,
    subquestion varchar not null,
    parent_question_id bigint,
    lang_id       bigint not null,
    PRIMARY KEY (subquestion_id)
);

CREATE TABLE question_subcategory
(
    subcategory_id bigint GENERATED ALWAYS AS IDENTITY,
    label       varchar not null,
    lang_id BIGINT not null,
    parent_category_id bigint,
    PRIMARY KEY (subcategory_id)
);

ALTER TABLE subquestions
    ADD FOREIGN KEY (lang_id) REFERENCES languages (lang_id),
    ADD FOREIGN KEY (parent_question_id) REFERENCES questions(question_id);

ALTER TABLE questions
    DROP COLUMN parent_question_id,
    DROP COLUMN generation,
    DROP CONSTRAINT questions_sub_category_id_fkey,
    ADD FOREIGN KEY (sub_category_id) REFERENCES question_subcategory(subcategory_id);

ALTER TABLE question_subcategory
    ADD FOREIGN KEY (lang_id) REFERENCES languages(lang_id),
    ADD FOREIGN KEY (parent_category_id) REFERENCES question_category(category_id);


-- migrate:down

ALTER TABLE questions
    ADD COLUMN parent_question_id bigint,
    ADD COLUMN generation int,
    DROP CONSTRAINT questions_sub_category_id_fkey,
    ADD FOREIGN KEY (sub_category_id) REFERENCES question_category(category_id);

drop table subquestions;
drop table question_subcategory;



