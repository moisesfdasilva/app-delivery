const express = require('express');

console.log('config inicial');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
