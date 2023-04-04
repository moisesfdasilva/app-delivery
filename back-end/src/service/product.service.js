const { Products } = require('../database/models');

const getAll = () => Products.findAll({});

module.exports = {
  getAll,
};