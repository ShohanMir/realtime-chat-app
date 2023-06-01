const express = require('express');
const authRouter = require('./auth.router');

const api = express.Router();

api.use('/', authRouter);

module.exports = api;
