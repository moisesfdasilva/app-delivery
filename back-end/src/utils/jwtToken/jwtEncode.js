require('dotenv/config');

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtEncode = (payload) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = jwtEncode;