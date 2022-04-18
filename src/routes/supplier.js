const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/supplierController');

router.get('/supplier', controller.list);
router.get('/supplier')
router.post('/supplier/add', controller.save);
router.get('/supplier/edit/:id', controller.edit);
router.post('/supplier/update/:id', controller.update);
router.get('/supplier/delete/:id', controller.delete);
module.exports = router;