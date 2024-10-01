const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./db/db.js'); 

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// database connection
database();

// test route
app.get('/', async (req, res) => {
    console.log('Hello from server');
    res.send('Hello from server'); // Sending a response to the client
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
