const express = require('express');
const app = express();
const Routes = require('./routing');

app.use('/', ...Routes);

app.listen(8080);