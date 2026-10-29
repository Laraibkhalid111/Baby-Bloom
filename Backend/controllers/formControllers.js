import {
  Login,
  Signup,
  Checkout,
  Review,
  EditProduct,
  ManageOrder,
  DeliveryAssignment,
  DeliveryStatus,
  Contact,
} from "../models/formModels.js";

const saveForm = (Model, message) => async (req, res) => {
  try {
    await new Model(req.body).save();
    res.status(201).json({ message });
  } catch (error) {
    console.error(`Error saving ${message}:`, error);
    res.status(500).json({ message: `Error saving ${message}`, error });
  }
};

export const loginController = saveForm(Login, "Login submitted successfully");
export const signupController = saveForm(Signup, "Signup submitted successfully");
export const checkoutController = saveForm(Checkout, "Checkout submitted successfully");
export const reviewController = saveForm(Review, "Review submitted successfully");
export const editProductController = saveForm(EditProduct, "Product update submitted successfully");
export const manageOrderController = saveForm(ManageOrder, "Order update submitted successfully");
export const deliveryAssignmentController = saveForm(DeliveryAssignment, "Delivery assignment submitted successfully");
export const deliveryStatusController = saveForm(DeliveryStatus, "Delivery status submitted successfully");
export const contactController = saveForm(Contact, "Contact message submitted successfully");
