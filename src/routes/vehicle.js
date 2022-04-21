const express = require('express');
const router = express.Router(); 
const vehicleController = require('../controllers/vehicleController');

router.get('/vehicle', vehicleController.list);
router.get('/vehicle/create', vehicleController.create);
router.post('/vehicle/add', vehicleController.save);
router.get('/vehicle/edit/:id', vehicleController.edit);
router.post('/vehicle/update/:id', vehicleController.update);
router.get('/vehicle/delete/:id', vehicleController.delete);

module.exports = router;
