import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productroutes.js";
import productController from "../controllers/productController.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}

);

mongoose.connect(
  "mongodb+srv://laraibkhalid107_db_user:11196@cluster0.wvijamw.mongodb.net/",
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});



export default app;