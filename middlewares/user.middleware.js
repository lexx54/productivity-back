const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const userRoute = require("../routes/user.route");
const logger = require("../utils/logger");

const getUsers = async (req,res)=>{
  const usersGotten = await User.find({});
  res.status(200).send(usersGotten);
}

const addUser = async (req,res)=>{
  const body = req.body;
  const userToAdd = {}

  if (!body.user ){
    res.status(400).json({message:"You didn't write a user name"});
    return;
  } else{
    body.user.length>3 && body.user.length<=12
      ? userToAdd.user = body.user
      : res.status(400).json({message:"User character allow min 4 max 12"})
  }
  
  if (!body.name ){
    res.status(400).json({message:"You didn't write your name"})
    return;
  } else {
    body.name.length>3
      ? userToAdd.name = body.name
      : res.status(400).json({message:"Name character allow min 4"})
  }

  if (!body.password ){
    res.status(400).json({message:"You didn't write your password"})
    return;
  } else {
    const passwordHash = await bcrypt.hash(body.password,10);
    body.password.length>3 && body.password.length <=12
      ? userToAdd.password = passwordHash
      : res.status(400).json({message:"password character allow min 4 max 12"})
  }
  
  const modelUser= new User(userToAdd);
  try {
    const respond = await modelUser.save();
    res.status(201).json(respond);
  } catch(err){
    res.status(400).send({message:err.message})
  }
  
}

const deleteUser = async (req,res) => {
  const id = req.params.id;

  await User.findByIdAndRemove(id);

  res.status(204).json({message:"succesfully deleted"})
}

const userMiddleware = {
  getUsers,
  addUser,
  deleteUser
}

module.exports = userMiddleware;