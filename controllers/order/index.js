const {ctrlWrapper} = require("../../decorators");

const addOrder = require("./addOrder");
const getAllOrders = require("./getAllOrders");

module.exports = {
    addOrder: ctrlWrapper(addOrder),
    getAllOrders: ctrlWrapper(getAllOrders),
}