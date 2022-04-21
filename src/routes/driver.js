const express = require('express');
const router = express.Router(); 
const driverController = require('../controllers/driverController');

router.get('/driver', driverController.list);
router.get('/driver/create', driverController.create);
router.post('/driver/add', driverController.save);
router.get('/driver/edit/:id', driverController.edit);
router.post('/driver/update/:id', driverController.update);
router.get('/driver/delete/:id', driverController.delete);

module.exports = router;
