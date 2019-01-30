 
CREATE TABLE storedb (id INTEGER PRIMARY KEY, "item_name" TEXT, quantity INTEGER, price INTEGER, aisle INTEGER, "on_sale?" INTEGER);

INSERT INTO storedb VALUES(1, "Jeans", 23, 25, 3, 0);
INSERT INTO storedb VALUES(2, "Shirts", 40, 15, 3, 1);
INSERT INTO storedb VALUES(3, "Shoes", 15, 40, 5, 0);
INSERT INTO storedb VALUES(4, "Hats", 10, 10, 4, 0);
INSERT INTO storedb VALUES(5, "Shorts", 8, 18, 2, 1);
INSERT INTO storedb VALUES(6, "Skirts", 17, 12, 6, 0);
INSERT INTO storedb VALUES(7, "Underwear", 40, 8, 7, 0);
INSERT INTO storedb VALUES(8, "Jackets", 50, 30, 1, 0);
INSERT INTO storedb VALUES(9, "Socks", 40, 7, 7, 0);
INSERT INTO storedb VALUES(10, "Vests", 15, 10, 2, 1);
INSERT INTO storedb VALUES(11, "Umbrellas", 5, 15, 1, 0);
INSERT INTO storedb VALUES(12, "Scarves", 6, 12, 1, 0);
INSERT INTO storedb VALUES(13, "Drinking Flask", 10, 10, 2, 1);
INSERT INTO storedb VALUES(14, "Tent", 4, 35, 2, 1);
INSERT INTO storedb VALUES(15, "Barbeque", 10, 50, 2, 1);

SELECT item_name, price 
FROM storedb
ORDER BY price desc;

SELECT SUM(price*quantity)
FROM storedb;
