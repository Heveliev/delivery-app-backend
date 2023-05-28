const {Schema, model} = require("mongoose");
const {handleMongooseError} = require("../../helpers");


const orderSchema = new Schema({

        name:{
        type: String,
        required: [true, 'Set user name'],},
    email:{
        type: String,
        required: [true, 'Set user email'],},
    phone:{
        type: String,
        required: [true, 'Set user phone'],},
    address:{
        type: String,
        required: [true, 'Set user address'],},
    totalPrice:{
        type: Number,
        required: [true, 'Set totalPrice']
        },
    currency:{ 
        type: String,
        enum: ["$"],
        default: "$"
    },
    orderNumber:{
        type:String,
        require: true,
    },
    order: [{
        _id:{ type: String,
            required: [true, 'Set id for product'],},
        name:{ 
            type: String,
            required: [true, 'Set name for product'],
        },
        price:{
            type:Number,
            require:true,
        },
        currency:{
            type:String,
            enum: ["$"],
            default: "$"
        },
        amount: {
            type: Number,
            required: [true, 'Set amount for product']
        },
      }]
    }
       
  ,{versionKey: false, timestamps: true }
)

orderSchema.post("save",handleMongooseError)



const Order = model("order",orderSchema);

module.exports = {
    Order,
};