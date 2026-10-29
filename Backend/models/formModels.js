import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const signupSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const checkoutSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  deliveryInstructions: { type: String },
  paymentMethod: { type: String, enum: ["cash-on-delivery"], required: true },
});

const reviewSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  rating: { type: String, enum: ["1", "2", "3", "4", "5"], required: true },
  feedback: { type: String, required: true },
});

const editProductSchema = new mongoose.Schema({
  product: {
    type: String,
    enum: ["baby-shampoo", "baby-lotion", "baby-oil", "baby-powder"],
    required: true,
  },
  productName: { type: String, required: true },
  category: {
    type: String,
    enum: ["diapers", "clothing", "feeding", "bath-skincare", "baby-accessories"],
    required: true,
  },
  description: { type: String, required: true },
  price: { type: Number, min: 0.01, required: true },
  stockQuantity: { type: Number, min: 0, required: true, validate: Number.isInteger },
});

const manageOrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  rider: { type: String, enum: ["rider-1", "rider-2", "rider-3"], required: true },
});

const deliveryAssignmentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  deliveryPerson: {
    type: String,
    enum: ["sarah-johnson", "michael-brown", "amina-wilson", "david-lee"],
    required: true,
  },
  assignmentDate: { type: String, required: true },
});

const deliveryStatusSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  deliveryStatus: {
    type: String,
    enum: ["assigned", "picked-up", "out-for-delivery", "delivered", "delivery-failed"],
    required: true,
  },
  deliveryNote: { type: String },
});

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

export const Login = mongoose.model("Login", loginSchema);
export const Signup = mongoose.model("Signup", signupSchema);
export const Checkout = mongoose.model("Checkout", checkoutSchema);
export const Review = mongoose.model("Review", reviewSchema);
export const EditProduct = mongoose.model("EditProduct", editProductSchema);
export const ManageOrder = mongoose.model("ManageOrder", manageOrderSchema);
export const DeliveryAssignment = mongoose.model("DeliveryAssignment", deliveryAssignmentSchema);
export const DeliveryStatus = mongoose.model("DeliveryStatus", deliveryStatusSchema);
export const Contact = mongoose.model("Contact", contactSchema);
