const express = require('express');
const { createServer } = require('http');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors = require('cors');

// DB CONNECTION
const db = require('./config/db');

const app = express();
const server = createServer(app);

dotenv.config({ path: './config/config.env' });

db(server);

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/test', require('./routes/test'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/post', require('./routes/post'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/like'));
app.use('/api/reply', require('./routes/reply'));

module.exports = server;
