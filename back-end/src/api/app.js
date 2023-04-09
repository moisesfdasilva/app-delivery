const express = require('express');
const cors = require('cors');
const {
  userRouters,
  productRouters,
  registerRouters,
  orderRouters,
  saleRouters,
} = require('../routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouters);
app.use('/products', productRouters);
app.use('/register', registerRouters);
app.use('/order', orderRouters);
app.use('/sale', saleRouters);

app.use(express.static('public'));

module.exports = app;
