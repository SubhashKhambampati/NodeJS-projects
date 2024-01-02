const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const {loginUser,currentUser ,registerUser } = require('../controllers/userController');


router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/current',currentUser);

module.exports = router;


