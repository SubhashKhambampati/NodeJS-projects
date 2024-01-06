
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = require('jsonwebtoken');


const registerUser = asyncHandler(async (req,res)=>{

    const {username, email , password} = req.body;
    if (!username || !password || !email) {
        res.status(400);
        throw new Error("All fields are mandatory.");


    }

    const userAvailable = await  User.findOne({email});


    if(userAvailable){

        res.status(400);
        throw new Error("User already Registered");

    }

    const hashedPassword = await bcrypt.hash(password , 10);
    console.log("Hashed Password : " , hashedPassword);

    const user = await User.create({
        username,email,password
    });

    if (user){
        res.status(201).json({_id: user.id , email:user.email});

    }
    else{
        res.status(404);
        throw new Error("User Data  is  not Valid");
    }

});

const loginUser = asyncHandler(async (req,res)=>{
    const { email , password} = req.body;
    if (!password || !email) {
        res.status(400);
        throw new Error("All fields are mandatory.");


    }
    const user = await User.findOne({email});
    if (user && (await bcrypt.compare(password , user.password))){

        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },
        },process.env.ACCESS_TOKEN_SECRET ,{expiresIn:'1d'});

    }
    else{
        res.status(401);
        throw new Error("Password and email are not valid");

    }
    res.json({message : "login user"});

});

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message : "Current user"});

});

module.exports = {loginUser, currentUser , registerUser};