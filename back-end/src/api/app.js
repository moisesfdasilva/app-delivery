const express = require('express');
const { userRouters } = require('../routers');

const app = express();

app.use(express.json());
app.use('/user', userRouters);

module.exports = app;
