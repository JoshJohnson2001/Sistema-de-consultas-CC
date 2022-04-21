const express = require('express');
const router = express.Router(); 
const repartidorController = require('../controllers/repartidorControllers');

router.get('/repartidor', repartidorController.list);
router.get('/repartidor/:id/orderClient', repartidorController.orderClient);
router.post('/repartidor/add', repartidorController.save);
router.get('/repartidor/:id', repartidorController.edit);
module.exports = router;

