import express from "express";
import {
  signup,
  login,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../controllers/customer/userController.js";

const router = express.Router();

router.post("/Signup", signup);
router.post("/Login", login);
router.get("/Users", getUsers);
router.get("/Users/:id", getUserById);
router.put("/Users/:id", updateUser);
router.delete("/Users/:id", deleteUser);

export default router;
