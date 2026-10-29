import express from "express";
import {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
  cancelOrder,
} from "../../controllers/admin/orderController.js";

const router = express.Router();

router.post("/Checkout", addOrder);
router.get("/Orders", getOrders);
router.get("/Orders/:id", getOrderById);
router.put("/Orders/:id", updateOrder);
router.put("/CancelOrder/:id", cancelOrder);

export default router;
