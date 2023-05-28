const Joi = require("joi");


const orderAddSchema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        phone:Joi.string().required(),
        address:Joi.string().required(),
        totalPrice:Joi.number().required(),
        currency:Joi.string().valid("$").default("$"),
        order:Joi.array().items(Joi.object({
          _id: Joi.string().require(),
            price: Joi.number().required(),
            name:Joi.string().required(),
            amount:Joi.number().required(),
        }).required()
        ),
        
    });



  const schemas = {
    orderAddSchema,

  }

  module.exports = schemas;