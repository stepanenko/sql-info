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

More at: https://www.w3schools.com/sql/sql_quickref.asp
