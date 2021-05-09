CREATE TABLE items (
item VARCHAR(50),
price MONEY
)

CREATE TABLE customers (
first_name VARCHAR(50),
last_name VARCHAR(50)
)


INSERT INTO items(item,price)
VALUES ('Small Desk','100')

INSERT INTO items(item,price)
VALUES ('Large Desk','300')

INSERT INTO items(item,price)
VALUES ('Fan','80')

INSERT INTO customers(first_name,last_name)
VALUES ('Greg','Jones')

INSERT INTO customers(first_name,last_name)
VALUES ('Scott','Scott')

INSERT INTO customers(first_name,last_name)
VALUES ('Trevor','Green')

INSERT INTO customers(first_name,last_name)
VALUES ('Melanie','Johnson')



SELECT item,price FROM items

SELECT item,price FROM items WHERE price > '80'

SELECT item,price FROM items WHERE price < '300'

SELECT first_name,last_name FROM customers WHERE last_name = 'Smith'

SELECT first_name,last_name FROM customers WHERE last_name = 'Jones'

SELECT first_name,last_name FROM customers WHERE first_name != 'Scott'






