const {ctrlWrapper} = require("../../decorators");


const getAllStores = require("./getAllStores");
const getProducts = require("./getProducts");

module.exports = {
    getAllStores:ctrlWrapper(getAllStores),
    getProducts:ctrlWrapper(getProducts),
}