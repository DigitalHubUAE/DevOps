const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => res.send({message: 'Hello World!'}));

app.listen(3000, () => {
 console.log("API Server running on port 3000");
});
