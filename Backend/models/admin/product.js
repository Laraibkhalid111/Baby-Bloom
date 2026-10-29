import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  pcategory: {
    type: String,
    enum: ["diapers", "clothing", "feeding", "bath-skincare", "baby-accessories"],
    required: true,
  },
  pdescription: {
    type: String,
    required: true,
  },
  pprice: {
    type: Number,
    required: true,
    min: 0.01,
  },
  pstock: {
    type: Number,
    required: true,
    min: 0,
    validate: Number.isInteger,
  },
})

const product = mongoose.model("Product", productSchema);

export default product;
