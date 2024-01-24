
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

### Example:

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
---

More at https://www.w3schools.com/sql/sql_ref_mysql.asp
