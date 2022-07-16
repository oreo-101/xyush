CREATE DATABASE appdb;
\c appdb;

-- CREATE TABLE app_user (
--     userid SERIAL PRIMARY KEY,
--     username varchar(16) UNIQUE NOT NULL,
--     password varchar(50) NOT NULL,
--     display_name varchar(100) 
-- );

-- dev users
-- INSERT INTO app_user (username, password, display_name) values ('dev', 'dev', 'Magic dev 1'), ('dev2', 'dev2', 'Magic dev 2');

-- CREATE TABLE post (
--     postid SERIAL PRIMARY KEY,
--     userid INTEGER NOT NULL,
--     content varchar(1000),
--     created_at TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
--     updated_at TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );



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


