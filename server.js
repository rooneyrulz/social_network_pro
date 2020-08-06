const express = require('express');
const { createServer } = require('http');
const dotenv = require('dotenv');
const logger = require('morgan');

// DB CONNECTTION
const db = require('./config/db');

const app = express();
const server = createServer(app);

dotenv.config({ path: './config/config.env' });

db(server);

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/test', require('./routes/test'));
app.use('/api/auth', require('./routes/auth'));

module.exports = server;
