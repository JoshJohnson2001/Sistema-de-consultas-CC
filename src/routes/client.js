const express = require('express');
const router = express.Router(); 
const clientController = require('../controllers/clientControllers');

router.get('/client', clientController.list);
router.get('/client/create', clientController.create);
router.post('/client/add', clientController.save);
router.get('/client/edit/:id', clientController.edit);

router.post('/client/update/:id', clientController.update);
router.get('/client/delete/:id', clientController.delete);
module.exports = router;

