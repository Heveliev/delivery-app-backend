const express = require('express');

const {ordersSchemas} = require("../../models");

const {validateBody} = require("../../decorators");
const {orderController} = require("../../controllers");



const router = express.Router();

router.get('/', orderController.getAllOrders)

router.post('/', validateBody(ordersSchemas.orderAddSchema), orderController.addOrder);

router.post('/specific',validateBody(ordersSchemas.orderSpecificSchema), orderController.getSpecificOrders);


module.exports = router