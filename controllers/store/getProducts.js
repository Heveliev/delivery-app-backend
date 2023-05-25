const {HttpError} = require("../../helpers");
const {Store} = require("../../models");

const getProducts = async(req,res) =>{
    const {id} = req.params;
    const result = await Store.findById(id);
    if(!result){
      throw HttpError(404,`Store with ${id} not found`)
    }
    res.json(result)
}

module.exports = getProducts;