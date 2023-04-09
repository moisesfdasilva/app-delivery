const userService = require('../service/user.service');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  const result = userService.verifyTokenCustomer(authorization);
  if (result.status === 200) {
    return next();
  }
  res.status(result.status).json({ message: result.message });
};

module.exports = {
  verifyToken,
};
