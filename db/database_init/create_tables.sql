CREATE DATABASE appdb;
\c appdb;


-- Auto updated updated_at column
CREATE OR REPLACE FUNCTION track_updated_at_column() 
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW; 
END;
$$ language 'plpgsql';

-- CREATE TRIGGER track_updated_at_column 
--     BEFORE UPDATE ON post
--     FOR EACH ROW EXECUTE PROCEDURE track_updated_at_column();


-- create server user
CREATE USER server_user with encrypted password 'dontlook';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO server_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO server_user;


-- Add data to JPA managed tables
INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_MODERATOR');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');


