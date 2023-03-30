const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
// const { validateLenghtName } = require('../middlewares');
// const inputValidate = require('../services/input.validate');
// const autentication = require('../middlewares/auth/validateJWT');

router.get(
  '/',
  // validateLenghtName,
  // inputValidate.validaEmail,
  // inputValidate.validaPassword,
  // inputValidate.checkEmail,
  userController.getUserLogin,
);

module.exports = router;