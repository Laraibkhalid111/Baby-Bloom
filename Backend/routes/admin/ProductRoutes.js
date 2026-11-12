
import express from "express";

import {
  productController,
  editProductController,
  deleteProductController
   viewProductController
} from "../../controllers/admin/productController.js";

const router = express.Router();

router.post("/AddProduct", productController);

router.post("/edit", editProductController);

router.delete("/", deleteProductController);

router.get("/Products", viewProductController);

export default router;
