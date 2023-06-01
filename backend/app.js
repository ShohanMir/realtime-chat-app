const express = require('express');
const cors = require('cors');
require('dotenv').config();

// import routes
const api = require('./routes/api');

const app = express();

// passing middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

module.exports = app;
