 import express from "express";
 import{Router} from "express";
import  productController  from "../controllers/productController.js";

 const router = express.Router();

 router.post("/AddProduct", productController);

 export default router;