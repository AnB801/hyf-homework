
CREATE DATABASE HWdataWeek3;
USE HWdataWeek3;

CREATE TABLE Meal (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 title VARCHAR(255) UNIQUE,
 description_meal TEXT,
 location_meal VARCHAR(255),
 when_created DATETIME,
 max_reservations INT, 
 price DECIMAL(10,2) NOT NULL,
 created_date DATE NOT NULL
);

CREATE TABLE Reservation (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 number_of_guests INT NOT NULL,
 meal_id INT NOT NULL,
 created_date DATE,
 contact_phonenumber VARCHAR(255),
 contact_name VARCHAR(50) NOT NULL,
 contact_email VARCHAR(255),
 FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

CREATE TABLE Review (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 title VARCHAR(255),
 description_reviev TEXT,
 meal_id INT NOT NULL,
 stars INT,
 created_date DATE,
 FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


ALTER TABLE Meal CONVERT TO CHARACTER SET utf8;

-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal (id, title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES (1, 'Пряний курячий суп зі стегном з мангала', 'Насичений, пряний бульйон з гречаною локшиною, маринованним яйцем та грильованою куркою', "Ukraine", "2023-01-01", 2, 90.99, "2023-01-02");  

INSERT INTO Meal (title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES ('Козацький ланч', 'Пісний борщ з часниковими пампушками та пиріг пастуха з томленою свининою. Подаємо з салатом із ферментованих овочів.', "Ukraine", "2023-01-01", 1, 90.99, "2023-02-04");  

INSERT INTO Meal (title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES ('Rød grød med fløde', '4 Келихи пива.', "Ukraine", NULL, 2, 200.15, "2023-03-05");  

INSERT INTO Meal (title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES ('Rød ROOOO', '10 Келихи пива.', "Ukraine", NULL, 3, 2220.15, "2023-03-12");  
INSERT INTO Meal (title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES ('Rød grød med fløde 22221', '55 Келихи пива.', NULL, NULL, 4, 1.15, "2023-04-05");  
INSERT INTO Meal (title, description_meal, location_meal, when_created, max_reservations,price,created_date)
VALUES ('BOrsh', NULL, NULL, NULL, 5, 1500.15, "2022-03-05");  

-- Get a meal with any id, fx 1
SELECT * FROM Meal 
Where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET description_meal = "НЕ Пісний борщ з часниковими пампушками" , price = 350.98
Where id =2 ;

-- Delete a meal with any id, fx 1
DELETE FROM Meal
Where id =1;


-- Get all reservations
SELECT * FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name , contact_email)
VALUES (1, 8, 2, "2023-01-02", "+4555445", "FOO", "foo@gmail.com" );
INSERT INTO Reservation ( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name , contact_email)
VALUES ( 2, 2, "2023-01-02", "4555dd445", "BOO", "boo@gmail.com" );
INSERT INTO Reservation ( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name , contact_email)
VALUES ( 5, 2, "2023-04-02", "101", "HOO", NULL);
INSERT INTO Reservation ( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name , contact_email)
VALUES ( 4, 2, "2023-05-01", "55659+", "LOO", NULL);

-- Get a reservation with any id, fx 1
SELECT * FROM Reservation
Where id = 3;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests = 100 , contact_email = "100@gmail.com"
Where id =3 ;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
Where id =1;


-- Get all reviews
SELECT * FROM Review;

-- Add a new review
INSERT INTO Review (id, title, description_reviev, meal_id, stars, created_date)
VALUES (1, "Good", "Tasty, very", 2,5, "2023-01-02" );
INSERT INTO Review (title, description_reviev, meal_id, stars, created_date)
VALUES ("Badd", "Tasty, but very bad", 3,1, "2023-01-10" );
INSERT INTO Review ( title, description_reviev, meal_id, stars, created_date)
VALUES ("Good Good", "Tasty, very", 1,4, "2023-01-02" );

-- Get a review with any id, fx 1
SELECT * FROM Review
Where id = 2;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review 
SET title = "BEST"
Where id =2;
-- Delete a review with any id, fx 1
DELETE FROM Review
Where id =1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM Meal
Where price < 90;
-- Get meals that still has available reservations
   --it's not clear what you want from me 

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM Meal
WHERE meal_title LIKE "%sRød grød med%";

-- Get meals that has been created between two dates
SELECT * FROM Meal
WHERE created_date BETWEEN "2023-01-02" AND "2023-03-05";

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal
LIMIT 5;

-- Get the meals that have good reviews
USE HWdataWeek3;
SELECT Meal.title, Review.stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
WHERE stars > 2;

-- Get reservations for a specific meal sorted by created_date
SELECT Meal.title, Reservation.number_of_guests, Reservation.created_date
FROM Meal
JOIN Reservation ON Meal.id = Reservation.meal_id
ORDER BY Reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.title, Review.title, stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
ORDER BY stars;