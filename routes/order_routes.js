import express from 'express';
import { addOrdersItems, getMyOrders, getOrderById, getOrders, getRecentOrders } from '../controllers/order_controller.js';

const OrderRouter = express.Router();

OrderRouter.route('/').post(addOrdersItems).get(getMyOrders).get(getOrders).get(getRecentOrders);
OrderRouter.route('/:id').get(getOrderById);
export default OrderRouter;