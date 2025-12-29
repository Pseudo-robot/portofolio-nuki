const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { apiLimiter } = require('./middlewares/rateLimiter');

const app = express();

/* =======================
   Global Middlewares
======================= */
app.use(helmet()); // security header
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

/* =======================
   Routes
======================= */
app.use('/api', apiLimiter);
app.use('/api', routes);

/* =======================
   Error Handler
======================= */
app.use(errorHandler);

module.exports = app;
