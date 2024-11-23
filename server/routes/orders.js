const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, orderController.getOrders);

router.post('/', authMiddleware, orderController.createOrder);

router.put('/:id', authMiddleware, orderController.updateOrder);

router.delete('/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;
