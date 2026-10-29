import express from "express";
import {
  addContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../../controllers/customer/contactController.js";

const router = express.Router();

router.post("/Contact", addContact);
router.get("/Contacts", getContacts);
router.get("/Contacts/:id", getContactById);
router.delete("/Contacts/:id", deleteContact);

export default router;
