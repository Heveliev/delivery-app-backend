const {ctrlWrapper} = require("../../decorators");

const addOrder = require("./addOrder");
const getAllOrders = require("./getAllOrders");
const getSpecificOrders = require("./getSpecificOrders");

module.exports = {
    addOrder: ctrlWrapper(addOrder),
    getAllOrders: ctrlWrapper(getAllOrders),
    getSpecificOrders: ctrlWrapper(getSpecificOrders),
}