
# SQL

Q | A
--- | ---
First appeared | 1974  
Paradigm | Declarative  
Family | Query language  
Typing discipline | Static, strong  
Designed by | Donald D. Chamberlin, Raymond F. Boyce 

- ### [SQL Keywords Reference](https://github.com/stepanenko/sql-info/blob/master/SQL_Keywords.md)
- ### [SQL Functions](https://github.com/stepanenko/sql-info/blob/master/MySQL_Functions.md)
- ### [SQL Quick Reference](https://github.com/stepanenko/sql-info/blob/master/SQL_Quick_Reference.md)

### Examples:

Database creation:
```sql
CREATE DATABASE mydatabase;
```
Table creation:
```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100)
);
```
Data Insertion:
```sql
INSERT INTO users (id, username, email)
VALUES (1, 'john_doe', 'john@example.com');
```
Data Querying:
```sql
SELECT * FROM users;
```
Data Filtering:
```sql
SELECT * FROM users WHERE username = 'john_doe';
```
Data Sorting and Limiting:
```sql
SELECT * FROM users ORDER BY username ASC LIMIT 10;
```
Data Updating:
```sql
UPDATE users SET email = 'john.doe@example.com' WHERE id = 1;
```
Data Deletion:
```sql
DELETE FROM users WHERE id = 1;
```
Table Deletion:
```sql
DROP TABLE table_name;
```
List Databases:
```sql
SHOW DATABASES; # Displays a list of all the available databases

SHOW SCHEMAS; # an alternate for the SHOW DATABASES statement
```
Use Database:
```sql
USE database_name; # Specifies which database to use
```
List Tables:
```sql
SHOW TABLES; # Displays a list of tables in the current database
```
More at https://www.w3schools.com/sql/sql_ref_mysql.asp
