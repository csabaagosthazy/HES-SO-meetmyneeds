-- migrate:up
ALTER TABLE questions ADD sub_category_id bigint,
    ADD FOREIGN KEY (sub_category_id) REFERENCES question_category (category_id);

-- migrate:down
ALTER TABLE questions DROP COLUMN sub_category_id;


