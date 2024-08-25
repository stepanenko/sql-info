### NodeJS and SQL

- **Node-Postgres (pg)**: A popular library for interfacing with PostgreSQL databases from Node.js. It supports both callbacks and promises for handling asynchronous operations.
Example of using pg to connect to a PostgreSQL database:
```js
const { Client } = require('pg');

const client = new Client({
  user: 'username',
  host: 'localhost',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

client.connect();

client.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  client.end();
});

```
