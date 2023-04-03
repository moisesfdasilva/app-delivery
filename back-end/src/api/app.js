const express = require('express');
const cors = require('cors');
const { userRouters } = require('../routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouters);

module.exports = app;
