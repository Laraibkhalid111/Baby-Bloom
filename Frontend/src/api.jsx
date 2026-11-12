
import axios from "axios";

// ADMIN - PRODUCT

export async function addProductAxiosFunction(data) {
  return await axios.post("http://localhost:3000/AddProduct", data);
}

export async function editProductAxiosFunction(data) {
  return await axios.post("http://localhost:3000/edit", data);
}

export async function submitEditProduct(data) {
  return await axios.post("http://localhost:3000/edit", data);
}

export async function getProducts() {
  return await axios.get("http://localhost:3000/Products");
}

export async function deleteProduct(data) {
  return await axios.delete("http://localhost:3000/", { data: data });
}




// ADMIN - ORDER

export async function submitManageOrder(data) {
  return await axios.put("http://localhost:3000/Orders", data);
}

export async function deleteOrder(orderId) {
  return await axios.delete("http://localhost:3000/Orders/" + orderId);
}


// ADMIN - SIGNUP AND LOGIN

export async function submitAdminSignup(data) {
  return await axios.post("http://localhost:3000/AdminSignup", data);
}

export async function submitAdminLogin(data) {
  return await axios.post("http://localhost:3000/AdminLogin", data);
}


// CUSTOMER - SIGNUP AND LOGIN

export async function submitSignup(data) {
  return await axios.post("http://localhost:3000/Signup", data);
}

export async function submitLogin(data) {
  return await axios.post("http://localhost:3000/Login", data);
}


// CUSTOMER - CHECKOUT

export async function submitCheckout(data) {
  return await axios.post("http://localhost:3000/Checkout", data);
}


// CUSTOMER - CONTACT

export async function submitContact(data) {
  return await axios.post("http://localhost:3000/Contact", data);
}


// CUSTOMER - REVIEW

export async function submitReview(data) {
  return await axios.post("http://localhost:3000/Review", data);
}


// DELIVERY RIDER

export async function submitDeliveryAssignment(data) {
  return await axios.post("http://localhost:3000/DeliveryAssignment", data);
}

export async function submitDeliveryStatus(data) {
  return await axios.put("http://localhost:3000/DeliveryStatus/" + data.orderId, data);
}

export async function getDeliveries() {
  return await axios.get("http://localhost:3000/Deliveries");
}

export async function getDeliveryById(id) {
  return await axios.get("http://localhost:3000/Deliveries/" + id);
}
