const errorTypes = {
  INVALID_FIELD: 400,
  INVALID_VALUE: 400,
  EMAIL_ALREADY_EXISTS: 409,
  USER_NOT_FOUND: 404,
};

const mapError = (type) => errorTypes[type] || 500;

module.exports = {
  errorTypes,
  mapError,
};