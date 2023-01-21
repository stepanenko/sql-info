## SQL Quick Reference

- AND / OR
```sql
SELECT column_name(s)
FROM table_name
WHERE condition_1
AND / OR condition_2
```
- ALTER TABLE
```sql
ALTER TABLE table_name
ADD column_name datatype
# or
ALTER TABLE table_name
DROP COLUMN column_name
```
- AS (alias)
```sql
SELECT column_name AS column_alias
FROM table_name
# or
SELECT column_name
FROM table_name AS table_alias
```
- BETWEEN
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name
BETWEEN value1 AND value2
```
- CREATE DATABASE
```sql
CREATE DATABASE database_name
```
- CREATE TABLE
```sql
CREATE TABLE table_name (
column_name1 data_type,
column_name2 data_type,
column_name3 data_type,
... )
```
- CREATE INDEX
```sql
CREATE INDEX index_name
ON table_name (column_name)
# or
CREATE UNIQUE INDEX index_name
ON table_name (column_name)
```
- CREATE VIEW
```sql
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition
```
- DELETE
```sql
DELETE FROM table_name
WHERE some_column=some_value
# or
DELETE FROM table_name # Note: Deletes the entire table!
# or
DELETE * FROM table_name # Note: Deletes the entire table!
```
- DROP DATABASE
```sql
DROP DATABASE database_name
```
- DROP INDEX
```sql
ALTER TABLE table_name
DROP INDEX index_name
```
- DROP TABLE
```sql
DROP TABLE table_name
```
- EXISTS
```sql
IF EXISTS (SELECT * FROM table_name WHERE id = ?)
BEGIN
-- do what needs to be done if exists
END
ELSE
BEGIN
-- do what needs to be done if not
END
```
- GROUP BY
```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
```
- HAVING
```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value
```
- IN
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name
IN (value1, value2, ..)
```
- INSERT INTO
```sql
INSERT INTO table_name
VALUES (value1, value2, value3,....)
# or
INSERT INTO table_name
(column1, column2, column3,...)
VALUES (value1, value2, value3,....)
```
- INNER JOIN
```sql
SELECT column_name(s)
FROM table_1
INNER JOIN table_2
ON table_1.column_name=table_2.column_name
```
- LEFT JOIN
```sql
SELECT column_name(s)
FROM table_1
LEFT JOIN table_2
ON table_1.column_name=table_2.column_name
```
- RIGHT JOIN
```sql
SELECT column_name(s)
FROM table_1
RIGHT JOIN table_2
ON table_1.column_name=table_2.column_name
```
- FULL JOIN
```sql
SELECT column_name(s)
FROM table_1
FULL JOIN table_2
ON table_1.column_name=table_2.column_name
```
- LIKE
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern
```
- ORDER BY
```sql
SELECT column_name(s)
FROM table_name
ORDER BY column_name [ASC|DESC]
```

More at: https://www.w3schools.com/sql/sql_quickref.asp
