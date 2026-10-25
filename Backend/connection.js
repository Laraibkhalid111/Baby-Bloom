import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/ProductRoutes.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", productRoutes);
app.use("/", formRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}

);

mongoose.connect(
  process.env.MONGODB_URI,
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});



export default app;