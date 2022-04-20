const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/supplierController');

router.get('/supplier', controller.list);
router.get('/supplier/create',controller.create);
router.post('/supplier/add', controller.save);
router.get('/supplier/edit/:id', controller.edit);
router.post('/supplier/update/:id', controller.update);
router.get('/supplier/delete/:id', controller.delete);

router.get('/supplier/:id/product', controller.listProduct);
router.get('/supplier/:id/product/create',controller.createProduct);
router.post('/supplier/:id/product/add', controller.saveProduct);
router.get('/supplier/:id/product/edit/:id', controller.editProduct);
router.post('/supplier/:id/product/update/:id', controller.updateProduct);
router.get('/supplier/:id/product/delete/:id', controller.deleteProduct);

router.get('/supplier/orders', controller.listOrders);
router.get('/supplier/order', controller.listSupplier);
router.get('/supplier/:id/product/order', controller.listSupplierProduct);


module.exports = router;