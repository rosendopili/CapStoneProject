CREATE TABLE inventory (
    id SERIAL,
    itemName VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    price FLOAT,
    photo1 BLOB,
    photo2 BLOB,
    user_id FOREIGN KEY
);
