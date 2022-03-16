-- migrate:up
CREATE TABLE question_answer (
  question_id bigint UNIQUE,
  answer_id bigint UNIQUE,
  PRIMARY KEY (question_id, answer_id)
);

CREATE TABLE patology_question (
  patology_id bigint UNIQUE,
  question_id bigint UNIQUE,
  PRIMARY KEY (patology_id, question_id)
);

CREATE TABLE resource_question (
  question_id bigint UNIQUE,
  resource_id bigint UNIQUE,
  PRIMARY KEY (question_id, resource_id)
);

CREATE TABLE questions (
  question_id bigint,
  question_name varchar(255),
  description text,
  question_set int,
  generation int,
  category_id bigint,
  lang_id bigint,
  PRIMARY KEY (question_id),
  CONSTRAINT fk_lang
    FOREIGN KEY (lang_id)
      REFERENCES question_answer(question_id),
  CONSTRAINT fk_category
    FOREIGN KEY (category_id)
      REFERENCES patology_question(patology_id),
  CONSTRAINT fk_generation
    FOREIGN KEY (generation)
      REFERENCES resource_question(question_id)
);

CREATE TABLE resources (
  resource_id bigint,
  url varchar(255),
  PRIMARY KEY (resource_id),
  CONSTRAINT fk_url
    FOREIGN KEY (resource_id)
      REFERENCES resource_question(question_id)
);

CREATE TABLE organization_types (
  organization_type_id bigint,
  name varchar(150),
  PRIMARY KEY (organization_type_id)
);

CREATE TABLE answer_language (
  answer_id bigint UNIQUE,
  lang_id bigint UNIQUE,
  PRIMARY KEY (answer_id, lang_id)
);

CREATE TABLE service_types (
  service_type_id bigint,
  name varchar(100),
  PRIMARY KEY (service_type_id)
);

CREATE TABLE question_language (
  lang_id bigint,
  question_id bigint,
  PRIMARY KEY (lang_id, question_id)
);

CREATE TABLE question_category_language (
  lang_id bigint UNIQUE,
  category_id bigint UNIQUE,
  PRIMARY KEY (lang_id, category_id)
);

CREATE TABLE question_category (
  category_id bigint,
  label varchar (150),
  lang_id bigint,
  PRIMARY KEY (category_id),
  CONSTRAINT fk_lang
    FOREIGN KEY (lang_id)
      REFERENCES question_category_language(lang_id)
);

CREATE TABLE organization_patology (
  organization_id bigint,
  patology_id bigint,
  PRIMARY KEY (organization_id, patology_id)
);

CREATE TABLE cantons (
  canton_id bigint,
  name varchar (60),
  PRIMARY KEY (canton_id)
);

CREATE TABLE organizations (
  organization_id bigint,
  name varchar (150) UNIQUE,
  latitude numeric,
  longitude numeric,
  address varchar(255),
  organization_type_id bigint,
  PRIMARY KEY (organization_id),
  CONSTRAINT fk_organization
    FOREIGN KEY (organization_id)
      REFERENCES cantons(canton_id)
);

CREATE TABLE answers (
  answer_id bigint,
  label varchar (255),
  lang_id bigint,
  PRIMARY KEY (answer_id),
  CONSTRAINT fk_answer
    FOREIGN KEY (answer_id)
      REFERENCES question_answer(question_id)
);

CREATE TABLE languages (
  lang_id bigint,
  name varchar(10),
  PRIMARY KEY (lang_id),
  CONSTRAINT fk_name
    FOREIGN KEY (lang_id)
      REFERENCES question_category_language(lang_id),
  CONSTRAINT fk_lang
    FOREIGN KEY (lang_id)
      REFERENCES answer_language(answer_id)
);

CREATE TABLE service_question (
  service_id bigint,
  question_id bigint,
  PRIMARY KEY (service_id, question_id)
);

CREATE TABLE questions_tree (
  parent bigint,
  child bigint,
  depth  int,
  PRIMARY KEY (parent, child, depth)
);

CREATE TABLE services (
  service_id bigint,
  name varchar(255),
  description text,
  organization_id bigint,
  service_type_id bigint,
  PRIMARY KEY (service_id),
  CONSTRAINT fk_name
    FOREIGN KEY (name)
      REFERENCES organizations(name)
);

CREATE TABLE patology (
  patology_id bigint,
  name varchar(60),
  PRIMARY KEY (patology_id)
);

-- migrate:down

drop table questions;
drop table resources;
drop table organization_types;
drop table service_types;
drop table question_language;
drop table question_category;
drop table organization_patology;
drop table answers;
drop table languages;
drop table service_question;
drop table questions_tree;
drop table services;
drop table patology;
drop table question_answer;
drop table patology_question;
drop table resource_question;
drop table answer_language;
drop table question_category_language;
drop table organizations;
drop table cantons;



