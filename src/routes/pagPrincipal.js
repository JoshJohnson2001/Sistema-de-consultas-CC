const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/pagController');


router.get('/',controller.pag);


module.exports = router;
