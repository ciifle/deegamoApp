import express from 'express';
import { addOrdersItems, cancelOrders, getMyOrders, getOrderById, getOrders, getRecentOrders } from '../controllers/order_controller.js';

const OrderRouter = express.Router();

OrderRouter.route('/').post(addOrdersItems).get(getOrders);
OrderRouter.route('/:id').get(getOrderById);
OrderRouter.route('/recent/orders').get(getRecentOrders);
OrderRouter.route('/myorders/:id').get(getMyOrders);
OrderRouter.route('/cancel/:id').put(cancelOrders);

export default OrderRouter;