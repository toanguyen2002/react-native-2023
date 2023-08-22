const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  password: {
    type: String,
    require: true,
  },
  verified:{
    type:Boolean,
    deafault:false
  },
  verificationtoken:String,
  address:[
    {
    name:String,
    Mobilephpne:String,
    hourseno:String,
    street:String,
    landmark:String,
    city:String,
    country:String,
    postalCode:String
}],
    order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }

});

const User = mongoose.model("User",userSchema)

module.exports = User