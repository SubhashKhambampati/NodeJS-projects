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

    const idd = req.params.id;

    const contact = await Contact.findById(`${idd}`);

    

    if (!contact){
        res.status(404);
        throw new Error(`Could not find contact`);
    }



    res.status(200).json(contact);
    // res.send(req.params.id , contact);

}));
router.route("/:id").put(asyncHandler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);

    if (!contact){
        res.status(404);
        throw new Error(`Could not find contact`);
    }

    const updateContact = await Contact.findByIdAndUpdate(req.params.id ,req.body ,{new:true});


    res.status(200).json(updateContact);


}));
router.route("/:id").delete(asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if (!contact){
        res.status(404);
        throw new Error(`Could not find contact`);
    }

    await Contact.remove();

    res.status(200).json(contact);

}));


module.exports = router;

