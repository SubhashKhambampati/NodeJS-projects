const express = require('express');

const router = express.Router();
const {getContact} = require('../controllers/contactController');

router.route('/').get(getContact); 

router.route("/").get((req,res)=>{

    res.status(200).json({ message : "Hello !"});

});

router.route("/").post((req,res)=>{

    res.status(200).json({ message : "Create Contacts"});

});
router.route("/:id").get((req,res)=>{

    res.status(200).json({ message : `Update Contacts for ${req.params.id}`});

});
router.route("/:id").put((req,res)=>{

    res.status(200).json({ message : "Updated Contacts"});

});
router.route("/:id").delete((req,res)=>{

    res.status(200).json({ message : `Delete Contacts for ${req.params.id}`});

});


module.exports = router;

