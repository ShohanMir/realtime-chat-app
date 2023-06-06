const express = require('express');
const cors = require('cors');
require('dotenv').config();

// import routes
const api = require('./routes/api');

const app = express();

// passing middleware
app.use(cors());
app.use(express.json());

app.use('/v1/api/', api);

module.exports = app;
