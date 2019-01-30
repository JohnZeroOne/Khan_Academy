 
/* What does the app's SQL look like? */

CREATE TABLE football (id INTEGER PRIMARY KEY AUTOINCREMENT, team_name TEXT, goals INTEGER);

INSERT INTO football VALUES (null, "England", 7);

INSERT INTO football VALUES (null, "Germany", 5);

INSERT INTO football VALUES (null, "France", 6);

SELECT * FROM football;

ALTER TABLE football ADD games_left INTEGER default 0;

UPDATE football SET games_left = 1 WHERE id = 1;

UPDATE football SET games_left = 0 WHERE id = 2;

UPDATE football SET games_left = 1 WHERE id = 3;

SELECT * FROM football;

DELETE FROM football WHERE games_left = 0;

SELECT * FROM football;
