import express from 'express';
import { addOrdersItems, getMyOrders, getOrderById, getOrders, getRecentOrders } from '../controllers/order_controller.js';

const OrderRouter = express.Router();

OrderRouter.route('/').post(addOrdersItems).get(getOrders);
OrderRouter.route('/:id').get(getOrderById);
OrderRouter.route('/recent').get(getRecentOrders);
OrderRouter.route('/user:id').get(getMyOrders);

export default OrderRouter;