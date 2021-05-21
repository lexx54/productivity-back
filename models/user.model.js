const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: {type:String,unique:true},
  user: String,
  password: String
})

userSchema.set("toJSON",{
  transform: (document,returnedObj)=>{
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  }
})

userSchema.plugin(uniqueValidator);

const User = mongoose.model("user",userSchema);

module.exports = User;