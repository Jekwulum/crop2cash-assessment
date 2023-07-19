const Joi = require('joi');
const createFarmerValidator = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  address: Joi.string().required(),
  phone_number: Joi.string().required(),
  crops: Joi.array().items(Joi.string()).required(),
});

module.exports = { createFarmerValidator };