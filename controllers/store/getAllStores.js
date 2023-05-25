const {Store} = require("../../models");

const getAllStores = async(_,res) =>{
    const result = await Store.find({},"-createdAt -updatedAt -products");
    res.json(result)
}

module.exports = getAllStores;