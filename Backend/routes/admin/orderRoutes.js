
import express from "express";

import {
  updateOrderController,
  deleteOrderController
} from "../../controllers/admin/orderController.js";

const router = express.Router();

router.put("/Orders", updateOrderController);

router.delete("/Orders/:orderId", deleteOrderController);

export default router;
