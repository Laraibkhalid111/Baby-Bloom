import express from "express";
import {
  addDelivery,
  getDeliveries,
  getDeliveryById,
  updateDelivery,
} from "../../controllers/deliveryRider/deliveryController.js";

const router = express.Router();

router.post("/DeliveryAssignment", addDelivery);
router.get("/DeliveryInformation", getDeliveries);
router.get("/DeliveryInformation/:id", getDeliveryById);
router.put("/DeliveryStatus/:id", updateDelivery);

export default router;
