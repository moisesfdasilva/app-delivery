const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json('token not found');
  } try {
    const decoded = jwt.verify(authorization, secret);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  verifyToken,
};
