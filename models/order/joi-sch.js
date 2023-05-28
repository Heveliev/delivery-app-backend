const Joi = require("joi");


const orderAddSchema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        phone:Joi.string().required(),
        address:Joi.string().required(),
        totalPrice:Joi.number().required(),
        currency:Joi.string().valid("$").default("$"),
        order:Joi.array().items(Joi.object({
          _id: Joi.string().required(),
            price: Joi.number().required(),
            name:Joi.string().required(),
            amount:Joi.number().required(),
        }).required()
        ),
        
    });
const orderSpecificSchema = Joi.object({
  email:Joi.string().required(),
  phone:Joi.string().required(),
})


  const schemas = {
    orderAddSchema,
    orderSpecificSchema

  }

  module.exports = schemas;