
import express from "express";

import {
  adminSignupController,
  adminLoginController
} from "../../controllers/admin/userController.js";

const router = express.Router();

router.post("/AdminSignup", adminSignupController);

router.post("/AdminLogin", adminLoginController);

export default router;
