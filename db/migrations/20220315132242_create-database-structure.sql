-- migrate:up

CREATE TABLE service_types (
  service_type_id bigint,
  name varchar(100),
  PRIMARY KEY (service_type_id)
);

CREATE TABLE cantons (
  canton_id bigint,
  name varchar (60),
  PRIMARY KEY (canton_id)
);

CREATE TABLE organization_types (
  organization_type_id bigint,
  name varchar(150),
  PRIMARY KEY (organization_type_id)
);

CREATE TABLE organizations (
  organization_id bigint,
  name varchar (150) UNIQUE,
  latitude numeric,
  longitude numeric,
  address varchar(255),
  organization_type_id bigint,
  canton_id bigint,
  PRIMARY KEY (organization_id),
  CONSTRAINT fk_organization_type_id
    FOREIGN KEY (organization_type_id)
      REFERENCES organization_types(organization_type_id),
  CONSTRAINT fk_canton_id
    FOREIGN KEY (canton_id)
      REFERENCES cantons(canton_id)
);

CREATE TABLE services (
  service_id bigint,
  name varchar(255),
  description text,
  organization_id bigint,
  service_type_id bigint,
  PRIMARY KEY (service_id),
  CONSTRAINT fk_service_type_id
    FOREIGN KEY(service_type_id)
    REFERENCES service_types(service_type_id),
  CONSTRAINT organization_id
    FOREIGN KEY (organization_id)
      REFERENCES organizations(organization_id)
);

CREATE TABLE questions (
  question_id bigint,
  question_name varchar(255),
  description text,
  question_set int,
  generation int,
  category_id bigint,
  lang_id bigint,
  PRIMARY KEY (question_id)
);

CREATE TABLE service_question (
  service_id bigint REFERENCES services ON DELETE cascade,
  question_id bigint REFERENCES questions ON DELETE cascade,
  PRIMARY KEY (service_id, question_id)
);

CREATE TABLE resources (
  resource_id bigint,
  url varchar(255),
  PRIMARY KEY (resource_id)
);

CREATE TABLE resource_question (
  question_id bigint REFERENCES questions ON DELETE CASCADE,
  resource_id bigint REFERENCES resources ON DELETE CASCADE,
  PRIMARY KEY (question_id, resource_id)
);

CREATE TABLE questions_tree (
  parent bigint,
  child bigint,
  depth  int,
  PRIMARY KEY (parent, child, depth)
);

CREATE TABLE patology (
  patology_id bigint,
  name varchar(60),
  PRIMARY KEY (patology_id)
);

CREATE TABLE organization_patology (
  organization_id bigint REFERENCES organizations ON DELETE CASCADE,
  patology_id bigint REFERENCES patology ON DELETE CASCADE,
  PRIMARY KEY (organization_id, patology_id)
);

CREATE TABLE patology_question (
  patology_id bigint REFERENCES patology ON DELETE CASCADE,
  question_id bigint REFERENCES questions ON DELETE CASCADE,
  PRIMARY KEY (patology_id, question_id)
);

CREATE TABLE answers (
  answer_id bigint,
  label varchar (255),
  PRIMARY KEY (answer_id)
);

CREATE TABLE languages (
  lang_id bigint,
  name varchar(10),
  PRIMARY KEY (lang_id)
);

CREATE TABLE answer_language (
  answer_id bigint REFERENCES answers ON DELETE CASCADE,
  lang_id bigint REFERENCES languages ON DELETE CASCADE,
  PRIMARY KEY (answer_id, lang_id)
);

CREATE TABLE question_category (
  category_id bigint,
  label varchar (150),
  PRIMARY KEY (category_id)
);

CREATE TABLE question_language (
  lang_id bigint REFERENCES languages ON DELETE CASCADE,
  question_id bigint REFERENCES questions ON DELETE CASCADE,
  PRIMARY KEY (lang_id, question_id)
);

CREATE TABLE question_answer (
  question_id bigint REFERENCES questions ON DELETE CASCADE,
  answer_id bigint REFERENCES answers ON DELETE CASCADE,
  PRIMARY KEY (question_id, answer_id)
);

CREATE TABLE question_category_language (
  lang_id bigint REFERENCES languages ON DELETE CASCADE,
  category_id bigint REFERENCES question_category ON DELETE CASCADE,
  PRIMARY KEY (lang_id, category_id)
);

ALTER TABLE questions add CONSTRAINT fk_category_id
    FOREIGN KEY (category_id)
      REFERENCES question_category(category_id);

-- migrate:down

drop table IF EXISTS questions cascade;
drop table IF EXISTS resources cascade;
drop table IF EXISTS organization_types cascade;
drop table IF EXISTS service_types cascade;
drop table IF EXISTS question_language cascade;
drop table IF EXISTS question_category cascade;
drop table IF EXISTS organization_patology cascade;
drop table IF EXISTS answers cascade;
drop table IF EXISTS languages cascade;
drop table IF EXISTS service_question cascade;
drop table IF EXISTS questions_tree cascade;
drop table IF EXISTS services cascade;
drop table IF EXISTS patology cascade;
drop table IF EXISTS question_answer cascade;
drop table IF EXISTS patology_question cascade;
drop table IF EXISTS resource_question cascade;
drop table IF EXISTS answer_language cascade;
drop table IF EXISTS question_category_language cascade;
drop table IF EXISTS organizations cascade;
drop table IF EXISTS cantons cascade;



