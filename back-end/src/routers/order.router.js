const express = require('express');

const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/:id', orderController.getAllCustomerOrders);
router.get('/details/:id', orderController.getCustomerOrderDetails);

module.exports = router;