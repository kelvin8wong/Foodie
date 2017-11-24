'use strict';

require('dotenv').config()

const PORT        = process.env.PORT || 3001;
const ENV         = process.env.ENV || 'development';
const express     = require('express');

const app         = express();
const bodyParser  = require('body-parser')

const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const dbHandlers  = require('./db/dbHandlers')(knex);

// Seperated Routes for each Resource
const reqRoutes   = require('./routes/requests')(dbHandlers);

app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use('/req', reqRoutes);

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
})
