/* Create table about the people and what they do here */

CREATE TABLE celebs (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    fullname TEXT,
    age INTEGER);

INSERT INTO celebs (fullname, age) VALUES ("Tom Cruise", 55);

INSERT INTO celebs (fullname, age) VALUES ("Nicole Kidman", 51);

INSERT INTO celebs (fullname, age) VALUES ("Robert De Niro", 74);

INSERT INTO celebs (fullname, age) VALUES ("Cameron Diaz", 45);

INSERT INTO celebs (fullname, age) VALUES ("Johnny Depp", 55);
    
CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    release_year INTEGER);

INSERT INTO movies (title, release_year) VALUES ("Top Gun", 1986);

INSERT INTO movies (title, release_year) VALUES ("Vanilla Sky", 2001);

INSERT INTO movies (title, release_year) VALUES ("The Mask", 1994);

INSERT INTO movies (title, release_year) VALUES ("Edward Scissorhands", 1990);

INSERT INTO movies (title, release_year) VALUES ("Pirates of the Caribbean", 2003);

INSERT INTO movies (title, release_year) VALUES ("Top Gun", 1986);

INSERT INTO movies (title, release_year) VALUES ("The Godfather 2", 1974); 
