 import axios from "axios";

export async function addProductAxiosFunction(data) {
  console.log("addProductAxiosFunction called");
  return await axios.post("http://localhost:3000/AddProduct", data);
}

export async function submitLogin(data) {
  return await axios.post("http://localhost:3000/Login", data);
}

export async function submitSignup(data) {
  return await axios.post("http://localhost:3000/Signup", data);
}

export async function submitCheckout(data) {
  return await axios.post("http://localhost:3000/Checkout", data);
}

export async function submitReview(data) {
  return await axios.post("http://localhost:3000/Review", data);
}

export async function submitEditProduct(data) {
  return await axios.post("http://localhost:3000/EditProduct", data);
}

export async function submitManageOrder(data) {
  return await axios.post("http://localhost:3000/ManageOrder", data);
}

export async function submitDeliveryAssignment(data) {
  return await axios.post("http://localhost:3000/DeliveryAssignment", data);
}

export async function submitDeliveryStatus(data) {
  return await axios.post("http://localhost:3000/DeliveryStatus", data);
}

export async function submitContact(data) {
  return await axios.post("http://localhost:3000/Contact", data);
}