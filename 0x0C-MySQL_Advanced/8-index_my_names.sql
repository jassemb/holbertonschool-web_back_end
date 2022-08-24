-- script that creates an index idx_name_first_name on the table users
CREATE INDEX idx_name_first ON names (name(1));