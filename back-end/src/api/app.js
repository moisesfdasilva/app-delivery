const express = require('express');
const { userRouters } = require('../routers');

console.log('config inicial');

const app = express();

app.use(express.json());
app.use('/user', userRouters);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
