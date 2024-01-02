
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');


const registerUser = asyncHandler(async (req,res)=>{

    const {username, email , password} = req.body;
    if (!username || !password || !email) {
        res.status(400);
        throw new Error("All fields are mandatory.");


    }

    const user = await  User.findOne({email});

    if(user){

        res.status(400);
        throw new Error("User already Registered");

    }


    res.json(user);

});

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message : "login user"});

});

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message : "Current user"});

});

module.exports = {loginUser, currentUser , registerUser};