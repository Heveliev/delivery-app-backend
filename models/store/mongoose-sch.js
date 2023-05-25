const {Schema, model} = require("mongoose");
const {handleMongooseError} = require("../../helpers");


const storeSchema = new Schema({
    store: {
      type: String,
      required: [true, 'Set store name for store'],
    },
    products: [{ name:{
      type:String,
      required: [true, 'Set name for product']
    },
    price:{
      type: Number,
      required: [true, 'Set price for product']
    },
    currency:{
      type:String,
      enum: ["$"],
      default: "$"
    }}
  ]
  },{versionKey: false, timestamps: true }
)

storeSchema.post("save",handleMongooseError)



const Store = model("store",storeSchema);

module.exports = {
    Store,
};