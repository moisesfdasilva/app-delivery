const express = require('express');
const cors = require('cors');
const { userRouters, productRouters } = require('../routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouters);
app.use('/products', productRouters);

module.exports = app;
