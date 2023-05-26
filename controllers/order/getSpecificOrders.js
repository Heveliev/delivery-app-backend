const {Order} = require("../../models");


const getSpecificOrders = async(req,res) =>{
const {email, phone} = req.body;
const result = await Order.find({email,phone},"-createdAt -updatedAt");
res.json(result)

}


module.exports = getSpecificOrders;