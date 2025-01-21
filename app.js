const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Apoorv, whats going in your head, can you focus what has to be'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
