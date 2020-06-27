'use strict';

const logger = require('morgan');
const express = require('express');
const helmet = require('helmet')
const compression = require('compression')
const rateLimiterRedisMiddleware = require('./middlewares/rateLimiterRedis');

const indexRouter = require('./routes/index');

const app = express();

// General Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security Middlewares
app.use(helmet())
app.use(compression())
app.use(rateLimiterRedisMiddleware);

// CRUD App
app.use('/', indexRouter);

module.exports = app;