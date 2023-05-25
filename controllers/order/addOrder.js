const {Order} = require("../../models");
const {generateOrderNumber} = require("../../helpers");

const addOrder = async(req,res) => {
    const orderNumber = generateOrderNumber();
    await Order.create({...req.body,orderNumber});
    res.status(201).json({orderNumber})
}

module.exports = addOrder;