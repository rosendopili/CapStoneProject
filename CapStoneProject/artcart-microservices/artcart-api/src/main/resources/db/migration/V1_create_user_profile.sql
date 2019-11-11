CREATE TABLE user_profile (
    id SERIAL,
    location VARCHAR(50),
    bio VARCHAR(200),
    profilePic BLOB,
    user_id FOREIGN KEY
);
