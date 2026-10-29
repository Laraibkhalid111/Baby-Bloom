
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/admin/ProductRoutes.js";
import userRoutes from "./routes/customer/userRoutes.js";
import orderRoutes from "./routes/admin/orderRoutes.js";
import deliveryRoutes from "./routes/deliveryRider/deliveryRoutes.js";
  import contactRoutes from "./routes/customer/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", productRoutes);
app.use("/", userRoutes);
app.use("/", orderRoutes);
app.use("/", deliveryRoutes);
app.use("/", contactRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  });

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

export default app;
