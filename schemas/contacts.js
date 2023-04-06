const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
    "string empty": `"name" cannot be empty`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" is required`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"phone" is required`,
  }),
});

module.exports = {
  addSchema,
};
