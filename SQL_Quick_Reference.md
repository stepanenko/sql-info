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

More at: https://www.w3schools.com/sql/sql_quickref.asp
