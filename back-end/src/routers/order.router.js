const express = require('express');

const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/customer/:id', orderController.getAllCustomerOrders);
router.get('/details/:id', orderController.getCustomerOrderDetails);
router.get('/seller/:id', orderController.getAllSellerOrders);

module.exports = router;