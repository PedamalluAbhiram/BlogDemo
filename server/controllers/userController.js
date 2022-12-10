const User=require('../models/User');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const colors=require('colors');

//Route POST api/users/register
// @desc Register a user
//@access Public 
const registerUser=async(req,res)=>{
    res.send('Register a user');
}

//@route POST api/users/login
//@desc Login a user
//access Public
const loginUser =async(req,res)=>{
    res.send('Login a user');
}

//@route GET api/users/profile
//@desc Get user profile 
//@access Private
const getProfile=async(req,res)=>{
    res.send('Get user Profile');
}


module.exports={
    registerUser,
    loginUser,
}