const express = require('express');
let app = express();
const port = 3000;

app.listen(port);

app.use(express.static('static'));


console.log(`Listening on port ${port}.`);
