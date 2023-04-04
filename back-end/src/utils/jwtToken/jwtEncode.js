require('dotenv/config');
const fs = require('fs');

const secretfs = fs.readFileSync('jwt.evaluation.key');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || secretfs;

const jwtEncode = (payload) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = jwtEncode;