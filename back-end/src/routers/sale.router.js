const express = require('express');

const router = express.Router();
const saleController = require('../controllers/saleController');
const { verifyToken } = require('../middleware/verifyToken');

router.post('/', verifyToken, saleController.postSale);
router.put('/status', saleController.updateSaleStatus);

module.exports = router;