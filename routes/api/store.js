const express = require('express');

const {storeController} = require("../../controllers");


const {isValidId} = require("../../decorators");

const router = express.Router();



router.get('/', storeController.getAllStores);

router.get('/:id/products', isValidId, storeController.getProducts);

module.exports = router;