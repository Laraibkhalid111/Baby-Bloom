import mongoose from "mongoose";
// structure is created inside a table . 
const productSchema = new mongoose.Schema({
   pid: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
    },
    pdescription: {
    type: String,
    required: true, 
    },
    pprice: {
    type: Number,
    required: true,
    }
})
 export default product;
