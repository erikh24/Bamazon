CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
    item_id INT,
    product_name VARCHAR (255) NOT NULL,
    department_name VARCHAR (255),
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT,
    PRIMARY KEY(item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Playstation 4 Pro", "Video Games", 399.99, 10),
(2, "LEGO Hogwarts Castle", "Toys", 399.99, 5),
(3, "Machi Koro Board Game", "Toys", 34.99, 5),
(4, "The Wizard", "Movies", 17.99, 3),
(5, "Persona 5 (PS4)", "Video Games", 19.99, 16),
(6, "Bag of 18 Tennis Balls", "Sports", 15.75, 3),
(7, "Xbox One S", "Video Games", 229.99, 10),
(8, "Dog Food", "Pet Supplies", 52.99, 24),
(9, "Jurassic Park Hardcover Book", "Books", 17.99, 13),
(10, "Toothless Dragon Plush", "Toys", 13.99, 20);

-- to update the product name of a specific item
USE bamazon;

UPDATE products
SET product_name = "Jurassic Park Book (Hardcover)"
WHERE item_id = 9;

SELECT * FROM products;


-- to update the quantity of a specific item in the products table
USE bamazon;

UPDATE products
SET stock_quantity = 3
WHERE item_id = 2;
