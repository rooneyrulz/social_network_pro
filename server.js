import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import logger from 'morgan';

const app = express();
const server = createServer(app);

dotenv.config({ path: './config/config.env' });

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

server.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENV} mode, port ${process.env.PORT}..`
  )
);
