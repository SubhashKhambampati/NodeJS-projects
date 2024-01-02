const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const {getContact} = require('../controllers/contactController');

router.route('/').get(getContact); 

router.route("/").get(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : "Hello !"});

}));

router.route("/").post(asyncHandler(async (req,res)=>{

    console.log(req.body);

    const {name , email} = req.body;

    if (!name || !email){

        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    res.status(200).json({ message : "Create Contacts"});

}));
router.route("/:id").get(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : `Update Contacts for ${req.params.id}`});

}));
router.route("/:id").put(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : "Updated Contacts"});

}));
router.route("/:id").delete(asyncHandler(async (req,res)=>{

    res.status(200).json({ message : `Delete Contacts for ${req.params.id}`});

}));


module.exports = router;

