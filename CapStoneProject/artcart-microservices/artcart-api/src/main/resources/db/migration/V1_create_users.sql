CREATE TABLE users (
    id SERIAL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE user_profile (
    id SERIAL,
    location VARCHAR(50),
    bio VARCHAR(200),
    profilePic BLOB,
    user_id FOREIGN KEY
);

CREATE TABLE inventory (
    id SERIAL,
    itemName VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    price FLOAT,
    photo1 BLOB,
    photo2 BLOB,
    user_id FOREIGN KEY
);