-- migrate:up

CREATE TYPE category_color AS ENUM(
    'red',
    'yellow',
    'green',
    'blue'
);

ALTER TABLE question_category
    -- Not nullable because we are editing a table with existing data
    ADD COLUMN question_category_color_set category_color;

-- migrate:down
ALTER TABLE question_category
    DROP COLUMN question_category_color_set;

DROP TYPE category_color;