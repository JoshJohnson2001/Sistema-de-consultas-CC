const express = require('express');
const router = express.Router(); 
const manteningController = require('../controllers/manteningController');

router.get('/mantening', manteningController.list);
router.get('/mantening/create', manteningController.create);
router.post('/mantening/add', manteningController.save);
router.get('/mantening/edit/:id', manteningController.edit);
router.post('/mantening/update/:id', manteningController.update);
router.get('/mantening/delete/:id', manteningController.delete);

module.exports = router;
