-- migrate:up
-- Column is nullable because we're dealing with a potentially already filled table
ALTER TABLE answers
    ADD COLUMN technical_key VARCHAR;


-- migrate:down
ALTER TABLE answers
    DROP COLUMN technical_key;
