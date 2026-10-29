import express from "express";
import {
  loginController,
  signupController,
  checkoutController,
  reviewController,
  editProductController,
  manageOrderController,
  deliveryAssignmentController,
  deliveryStatusController,
  contactController,
} from "../controllers/formControllers.js";

const router = express.Router();

router.post("/Login", loginController);
router.post("/Signup", signupController);
router.post("/Checkout", checkoutController);
router.post("/Review", reviewController);
router.post("/EditProduct", editProductController);
router.post("/ManageOrder", manageOrderController);
router.post("/DeliveryAssignment", deliveryAssignmentController);
router.post("/DeliveryStatus", deliveryStatusController);
router.post("/Contact", contactController);

export default router;
