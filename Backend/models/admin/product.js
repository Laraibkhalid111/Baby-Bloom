
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  pname: { type: String, required: true },
  pcategory: { type: String, required: true },
  pdescription: { type: String, required: true },
  pprice: { type: Number, required: true },
  pstock: { type: Number, required: true }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
