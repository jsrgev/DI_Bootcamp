SELECT id, first_name, last_name, birth_date
FROM students
ORDER BY last_name
LIMIT 4


SELECT min(birth_date) AS youngest
FROM students
--not sure how to display other columns


SELECT id, first_name, last_name, birth_date
FROM students
LIMIT 3
OFFSET 2