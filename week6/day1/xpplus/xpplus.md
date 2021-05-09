CREATE TABLE students (
id SERIAL PRIMARY KEY
last_name VARCHAR(100)
first_name VARCHAR(100)
birth_date DATE
)

INSERT INTO students(first_name,last_name,birth_date)
VALUES('Marc','Benichou','11-02-1998')

INSERT INTO students(first_name,last_name,birth_date)
VALUES('Yoan','Cohen','12-03-2010')

INSERT INTO students(first_name,last_name,birth_date)
VALUES('Lea','Benichou','07-27-1987')

INSERT INTO students(first_name,last_name,birth_date)
VALUES('Amelia','Dux','04-07-1996')

INSERT INTO students(first_name,last_name,birth_date)
VALUES('David','Grez','06-14-2003')

INSERT INTO students(first_name,last_name,birth_date)
VALUES('Omer','Simpson','10-03-1980')


select id,first_name,last_name,birth_date from students

SELECT first_name,last_name from students
WHERE id=2

SELECT first_name,last_name from students
WHERE first_name = 'Marc' AND last_name = 'Benichou'

SELECT first_name,last_name from students
WHERE first_name = 'Marc' OR last_name = 'Benichou'

SELECT first_name,last_name from students
WHERE first_name LIKE '%a%' 

SELECT first_name,last_name from students
WHERE first_name LIKE 'A%' 

SELECT first_name,last_name from students
WHERE first_name LIKE '%a' 

SELECT first_name,last_name from students
WHERE first_name LIKE '%a_' 

SELECT first_name,last_name from students
WHERE id = '1' AND id = '3'

SELECT id,first_name,last_name,birth_date from students
WHERE birth_date >= '01-01-2000'



