

------ Creating / Deleting Tables in db

-- Create a new table
-- Creates columns, Sets name and type
CREATE TABLE test_table (
  name VARCHAR(30) NOT NULL,
  has_pet BOOLEAN DEFAULT false,
  pet_type VARCHAR(10) NOT NULL,
  pet_name VARCHAR(30),
  pet_age INT
);

-- Insert data into the table
INSERT INTO test_table (name, has_pet, pet_type, pet_name, pet_age)
VALUES ('Jacob', true, 'dog', 'Misty', 10),
  ('Ahmed', true, 'rock', 'Rockington', 100),
  ('Peter', true, 'cat', 'Franklin', 2),
  ('Dave', true, 'dog', 'Queso', 1);

-- Call Table
SELECT * FROM test_table;

-- Delete the table "people"
DROP TABLE people;

-- Re-create the table "people" within animals_db
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  has_pet BOOLEAN DEFAULT false,
  pet_type VARCHAR(10) NOT NULL,
  pet_name VARCHAR(30),
  pet_age INT
);

-- Insert data into the table
INSERT INTO people (name, has_pet, pet_type, pet_name, pet_age)
VALUES ('Jacob', true, 'dog', 'Misty', 10),
  ('Ahmed', true, 'rock', 'Rockington', 100),
  ('Ahmed', true, 'rock', 'Rockington', 100),
  ('Peter', true, 'cat', 'Franklin', 2),
  ('Dave', true, 'dog', 'Queso', 1),
  ('Dave', true, 'dog', 'Pringles', 7);





------- Basic Queries


--  Select all rows from table
SELECT * FROM people;


-- Select specified rows
SELECT 
	name,
	pet_name,
	pet_age
FROM people;


-- Conditional Statements
SELECT *
FROM people
WHERE name = 'Dave';


-- Update a single row
UPDATE people
SET has_pet = true, pet_name = 'Rocket', pet_age = 8
WHERE id = 6;

-- Delete row
DELETE FROM people
WHERE id = 3;


-- Joining Tables

-- film and film_actor share film_id column
-- film_actor and actor share actor_id column
-- used actor_id as intermediate table
SELECT 
	f.film_id,
	f.title,
	f.release_year,
	a.first_name,
	a.last_name	
FROM film AS f
INNER JOIN film_actor AS fa
	ON(f.film_id = fa.film_id)
INNER JOIN actor AS a
	ON(fa.actor_id = a.actor_id)
WHERE title = 'NUTS TIES';


-- Aggregate Commands
SELECT
	COUNT(title) AS "num films",
	MAX(rental_rate) AS "most expensive",
	MIN(rental_rate) AS "least expensive",
	AVG(rental_rate) AS "avg cost",
	ROUND(AVG(rental_rate), 2) AS "rounded avg cost",
	SUM(rental_rate) AS "Total Rental Rate"
FROM film;


-- With GROUP BY
SELECT
	rating,
	COUNT(title) AS "num films"
FROM film
GROUP BY rating;


-- With ORDER BY (sorted) (DESC or ASC)
SELECT
	rating,
	COUNT(title) AS "num films"
FROM film
GROUP BY rating
ORDER BY "num films" DESC;


-- With LIMIT (AKA head())
SELECT
	rating,
	COUNT(title) AS "num films"
FROM film
GROUP BY rating
ORDER BY "num films" DESC
LIMIT 3;



-- Subqueries
-- Working bottom to top:
	-- Get staff id from Jon
	-- Get all inventory_id rented through Jon
	-- Get all film_id rented through Jon
	-- Get all film titles rented through Jon
SELECT title
FROM film
WHERE film_id IN(

	SELECT film_id
	FROM inventory
	WHERE inventory_id IN(
	
		SELECT inventory_id
		FROM rental
		WHERE staff_id IN(
		
			SELECT staff_id 
			FROM staff
			WHERE first_name = 'Jon'
		)
	)
);



-- Create Views

-- Query filtering down to 22 rows
SELECT * FROM film
WHERE length > 150 AND 
	rental_rate > 4 AND 
	replacement_cost < 15;

-- Create View for query
CREATE VIEW filtered_films AS
SELECT * FROM film
WHERE length > 150 AND 
	rental_rate > 4 AND 
	replacement_cost < 15;

-- Call view as regular table
SELECT * FROM filtered_films;

-- Drop view
DROP VIEW filtered_films;



-- FOREIGN KEYS

-- Primary keys in the main index for the table
-- Foreign keys reference primary keys from other tables
-- Way to connect each of the tables
	-- film PK: film_id
		-- inventory PK: inventory_id
		-- inventory FK: film_id ref film PK
		-- inventory FK: store_id ref store PK
			-- store PK: store_id
			-- store FK: manager_staff_id
			-- store FK: address_id
			
SELECT * FROM film;
SELECT * FROM inventory;
SELECT * FROM store;



-- UNIONS
-- ADD first and second queries to the same table
-- UNION ALL includes duplicate rows

SELECT title FROM film
WHERE length = 120

UNION ALL

SELECT title FROM film
WHERE length = 130;


-- EXAMPLES
SELECT 
	f.title,
	COUNT(i.film_id) AS "num copies"
FROM inventory AS i
INNER JOIN film AS f
	ON(i.film_id = f.film_id)
GROUP BY i.film_id, f.title
HAVING COUNT(i.film_id) = 7;


