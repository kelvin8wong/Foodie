'use strict';

require('dotenv').config()

const PORT          = process.env.PORT || 3001;
const ENV           = process.env.ENV || 'development';
const express       = require('express');
const bodyParser    = require('body-parser');

const app = express();

const knexConfig    = require('./knexfile');
const knex          = require('knex')(knexConfig[ENV]);
const morgan        = require('morgan');
const knexLogger    = require('knex-logger');

const dbHandlers    = require('./dbHandlers.js')(knex);

// Seperated Routes for each Resource
const reqRoutes     = require('./routes/requests')(dbHandlers);