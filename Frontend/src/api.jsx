
import axios from "axios";

// PRODUCT
export async function addProductAxiosFunction(data) {
  return await axios.post("http://localhost:3000/AddProduct", data);
}

export async function editProductAxiosFunction(data) {
  return await axios.post("http://localhost:3000/edit", data);
}

export async function deleteProductAxiosFunction(data) {
  return await axios.delete("http://localhost:3000/", { data: data });
}


// USER
export async function submitSignup(data) {
  return await axios.post("http://localhost:3000/Signup", data);
}

export async function submitLogin(data) {
  return await axios.post("http://localhost:3000/Login", data);
}

export async function getUsers() {
  return await axios.get("http://localhost:3000/Users");
}

export async function getUserById(id) {
  return await axios.get("http://localhost:3000/Users/" + id);
}

export async function updateUser(id, data) {
  return await axios.put("http://localhost:3000/Users/" + id, data);
}

export async function deleteUser(id) {
  return await axios.delete("http://localhost:3000/Users/" + id);
}


// ORDER
export async function submitCheckout(data) {
  return await axios.post("http://localhost:3000/Checkout", data);
}

export async function getOrders() {
  return await axios.get("http://localhost:3000/Orders");
}

export async function getOrderById(id) {
  return await axios.get("http://localhost:3000/Orders/" + id);
}

export async function submitManageOrder(data) {
  return await axios.put("http://localhost:3000/Orders/" + data.orderId, data);
}

export async function cancelOrder(id) {
  return await axios.put("http://localhost:3000/CancelOrder/" + id);
}


// CONTACT
export async function submitContact(data) {
  return await axios.post("http://localhost:3000/Contact", data);
}

export async function getContacts() {
  return await axios.get("http://localhost:3000/Contact");
}

export async function getContactById(id) {
  return await axios.get("http://localhost:3000/Contact/" + id);
}

export async function deleteContact(id) {
  return await axios.delete("http://localhost:3000/Contact/" + id);
}


// DELIVERY
export async function submitDeliveryAssignment(data) {
  return await axios.post("http://localhost:3000/DeliveryAssignment", data);
}

export async function getDeliveries() {
  return await axios.get("http://localhost:3000/Deliveries");
}

export async function getDeliveryById(id) {
  return await axios.get("http://localhost:3000/Deliveries/" + id);
}

export async function submitDeliveryStatus(data) {
  return await axios.put("http://localhost:3000/DeliveryStatus/" + data.orderId, data);
}

export async function deleteDelivery(id) {
  return await axios.delete("http://localhost:3000/Deliveries/" + id);
}
