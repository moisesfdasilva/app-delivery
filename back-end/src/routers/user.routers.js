const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.postUserLogin);
router.get('/data', userController.getUser);
router.get('/verify', userController.verifyTokenCustomer);

module.exports = router;