
import express from "express";

import {
  checkoutController
} from "../../controllers/customer/checkoutController.js";

const router = express.Router();

router.post("/Checkout", checkoutController);

export default router;
