const {Order} = require("../../models");

const getAllOrders = async(_,res) =>{
    const result = await Order.find({},"-createdAt -updatedAt");
    res.json(result)
}

module.exports = getAllOrders;