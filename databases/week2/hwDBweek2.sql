
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE school;

USE school;

CREATE TABLE Class (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);

CREATE TABLE Student (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);
-- Create an index on the name column of the student table.
USE school;
CREATE INDEX student_name_idx
ON Student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
USE school;
ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

