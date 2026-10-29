
import express from "express";

import {
  addContact,
  getContacts,
  getContactById,
  deleteContact
} from "../../controllers/customer/contactController.js";

const router = express.Router();

router.post("/Contact", addContact);

router.get("/Contact", getContacts);

router.get("/Contact/:id", getContactById);

router.delete("/Contact/:id", deleteContact);

export default router;
