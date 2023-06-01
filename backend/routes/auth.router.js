const express = require('express');
const authRouter = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const authControllers = require('../controllers/auth/auth.controller');

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

authRouter.post(
  '/register',
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
authRouter.post(
  '/login',
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = authRouter;
