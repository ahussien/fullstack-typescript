var express = require('express');
var logger = require('morgan');
var cors = require('cors')
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

var apiRouter = require('./routes/api');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
