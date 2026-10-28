import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignmentDate: { type: String, required: true },
  deliveryStatus: {
    type: String,
    enum: ["assigned", "picked-up", "out-for-delivery", "delivered", "delivery-failed"],
    default: "assigned",
  },
  deliveryNote: { type: String },
});

const Delivery = mongoose.model("Delivery", deliverySchema);

export default Delivery;
