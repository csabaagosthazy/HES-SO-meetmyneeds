-- migrate:up

CREATE TABLE service_types
(
    service_type_id bigint GENERATED ALWAYS AS IDENTITY,
    name            varchar not null,
    PRIMARY KEY (service_type_id)
);

CREATE TABLE cantons
(
    canton_id bigint GENERATED ALWAYS AS IDENTITY,
    name      varchar not null,
    PRIMARY KEY (canton_id)
);

CREATE TABLE organization_types
(
    organization_type_id bigint GENERATED ALWAYS AS IDENTITY,
    name                 varchar not null,
    PRIMARY KEY (organization_type_id)
);

CREATE TABLE organizations
(
    organization_id      bigint GENERATED ALWAYS AS IDENTITY,
    name                 varchar not null,
    latitude             numeric,
    longitude            numeric,
    address              varchar,
    organization_type_id bigint not null,
    canton_id            bigint,
    PRIMARY KEY (organization_id)
);

CREATE TABLE services
(
    service_id      bigint GENERATED ALWAYS AS IDENTITY,
    name            varchar not null,
    description     text not null,
    organization_id bigint not null,
    service_type_id bigint,
    PRIMARY KEY (service_id)
);

CREATE TABLE questions
(
    question_id   bigint GENERATED ALWAYS AS IDENTITY,
    question varchar not null,
    question_set  int,
    generation    int,
    parent_question_id bigint,
    category_id   bigint not null,
    lang_id       bigint not null,
    PRIMARY KEY (question_id)
);

CREATE TABLE resources
(
    resource_id bigint GENERATED ALWAYS AS IDENTITY,
    name varchar not null,
    url         varchar not null,
    PRIMARY KEY (resource_id)
);

CREATE TABLE pathology
(
    pathology_id bigint GENERATED ALWAYS AS IDENTITY,
    name        varchar,
    PRIMARY KEY (pathology_id)
);

CREATE TABLE answers
(
    answer_id bigint GENERATED ALWAYS AS IDENTITY,
    label     varchar not null,
    lang_id BIGINT not null,
    PRIMARY KEY (answer_id)
);

CREATE TABLE languages
(
    lang_id bigint GENERATED ALWAYS AS IDENTITY,
    name    varchar not null,
    PRIMARY KEY (lang_id)
);

CREATE TABLE service_question
(
    service_id  bigint REFERENCES services ON DELETE cascade,
    question_id bigint REFERENCES questions ON DELETE cascade,
    PRIMARY KEY (service_id, question_id)
);

CREATE TABLE question_category
(
    category_id bigint GENERATED ALWAYS AS IDENTITY,
    label       varchar not null,
    lang_id BIGINT not null,
    PRIMARY KEY (category_id)
);

CREATE TABLE resource_question
(
    question_id bigint REFERENCES questions ON DELETE CASCADE,
    resource_id bigint REFERENCES resources ON DELETE CASCADE,
    PRIMARY KEY (question_id, resource_id)
);

CREATE TABLE question_answer
(
    question_id bigint REFERENCES questions ON DELETE CASCADE,
    answer_id   bigint REFERENCES answers ON DELETE CASCADE,
    PRIMARY KEY (question_id, answer_id)
);

CREATE TABLE organization_pathology
(
    organization_id bigint REFERENCES organizations ON DELETE CASCADE,
    pathology_id     bigint REFERENCES pathology ON DELETE CASCADE,
    PRIMARY KEY (organization_id, pathology_id)
);

CREATE TABLE pathology_question
(
    pathology_id bigint REFERENCES pathology ON DELETE CASCADE,
    question_id bigint REFERENCES questions ON DELETE CASCADE,
    PRIMARY KEY (pathology_id, question_id)
);

ALTER TABLE questions
    ADD FOREIGN KEY (category_id) REFERENCES question_category (category_id),
    ADD FOREIGN KEY (lang_id) REFERENCES languages (lang_id),
    ADD FOREIGN KEY (parent_question_id) REFERENCES questions(question_id);

ALTER TABLE answers
    ADD FOREIGN KEY (lang_id) REFERENCES languages(lang_id);

ALTER TABLE question_category
    ADD FOREIGN KEY (lang_id) REFERENCES languages(lang_id);

ALTER TABLE organizations
    ADD FOREIGN KEY (organization_type_id) REFERENCES organization_types(organization_type_id),
    ADD FOREIGN KEY (canton_id) REFERENCES cantons(canton_id);

ALTER TABLE services
    ADD FOREIGN KEY  (service_type_id) REFERENCES service_types (service_type_id),
    ADD FOREIGN KEY (organization_id) REFERENCES organizations (organization_id);

-- migrate:down

drop table IF EXISTS answers cascade;
drop table IF EXISTS cantons cascade;
drop table IF EXISTS languages cascade;
drop table IF EXISTS organization_pathology cascade;
drop table IF EXISTS organization_types cascade;
drop table IF EXISTS organizations cascade;
drop table IF EXISTS pathology cascade;
drop table IF EXISTS pathology_question cascade;
drop table IF EXISTS question_answer cascade;
drop table IF EXISTS question_category cascade;
drop table IF EXISTS questions cascade;
drop table IF EXISTS resource_question cascade;
drop table IF EXISTS resources cascade;
drop table IF EXISTS schema_migrations cascade;
drop table IF EXISTS service_question cascade;
drop table IF EXISTS service_types cascade;
drop table IF EXISTS services cascade;



