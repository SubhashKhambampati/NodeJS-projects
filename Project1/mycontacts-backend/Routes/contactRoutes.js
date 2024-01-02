const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const {getContact} = require('../controllers/contactController');

const Contact = require('../models/contactModel');


// router.route('/').get(getContact); 

router.route("/").get(asyncHandler(async (req,res)=>{

    const contacts = await Contact.find();

    res.status(200).json(contacts);

}));

router.route("/").post(asyncHandler(async (req,res)=>{

    console.log(req.body);

    const {name , email} = req.body;

    if (!name || !email){

    
        res.status(400);

        throw new Error("All fields are mandatory.");
    
    }

    const contact = await Contact.create({name, email});

    res.status(200).json(contact);

}));
router.route("/:id").get(asyncHandler(async (req,res)=>{

    const contact = 

    res.status(200).json({ message : `Update Contacts for ${req.params.id}`});

}));
router.route("/:id").put(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : "Updated Contacts"});

}));
router.route("/:id").delete(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : `Delete Contacts for ${req.params.id}`});

}));


module.exports = router;

