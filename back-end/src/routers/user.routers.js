const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.postUserLogin);
router.delete('/:id', userController.deleteUser);
router.get('/data', userController.getUsersComun);
router.get('/verify', userController.verifyTokenCustomer);
router.get('/sellers', userController.getSaller);

module.exports = router;