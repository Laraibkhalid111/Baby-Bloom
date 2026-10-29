
import express from "express";

import {
  addDelivery,
  getDeliveries,
  getDeliveryById,
  updateDelivery,
  deleteDelivery
} from "../../controllers/deliveryRider/deliveryController.js";

const router = express.Router();

router.post("/DeliveryAssignment", addDelivery);

router.get("/Deliveries", getDeliveries);

router.get("/Deliveries/:id", getDeliveryById);

router.put("/DeliveryStatus/:id", updateDelivery);

router.delete("/Deliveries/:id", deleteDelivery);

export default router;
