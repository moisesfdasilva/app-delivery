require('dotenv/config');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key');
const jwt = require('jsonwebtoken');

const jwtEncode = (payload) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const jwtDecode = (token) => {
  const decoded = jwt.verify(token, secret);
  const { role } = decoded;
  return role;
};

module.exports = { jwtEncode, jwtDecode };