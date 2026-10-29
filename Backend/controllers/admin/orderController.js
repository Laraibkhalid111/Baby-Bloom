
import Order from "../../models/admin/Order.js";

// ADD ORDER
export const addOrder = (req, res) => {
  const {
    customerId,
    fullName,
    email,
    phone,
    address,
    city,
    area,
    deliveryInstructions,
    items,
    totalAmount,
    paymentMethod
  } = req.body;

  const newOrder = new Order({
    customerId: customerId,
    fullName: fullName,
    email: email,
    phone: phone,
    address: address,
    city: city,
    area: area,
    deliveryInstructions: deliveryInstructions,
    items: items,
    totalAmount: totalAmount,
    paymentMethod: paymentMethod
  });

  newOrder.save()
    .then(() => res.status(201).send("Order added successfully"))
    .catch((error) => res.status(500).send("Error adding order: " + error));
};


// VIEW ALL ORDERS
export const getOrders = (req, res) => {
  Order.find()
    .then((orders) => res.status(200).send(orders))
    .catch((error) => res.status(500).send("Error getting orders: " + error));
};


// VIEW ONE ORDER
export const getOrderById = (req, res) => {
  const { id } = req.params;

  Order.findById(id)
    .then((order) => res.status(200).send(order))
    .catch((error) => res.status(500).send("Error getting order: " + error));
};


// UPDATE ORDER
export const updateOrder = (req, res) => {
  const { id } = req.params;

  Order.findOneAndUpdate(
    { _id: id },
    req.body,
    { runValidators: true }
  )
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.status(200).send("Order updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating order: " + error));
};


// CANCEL ORDER
export const cancelOrder = (req, res) => {
  const { id } = req.params;

  Order.findOneAndUpdate(
    { _id: id },
    { orderStatus: "cancelled" }
  )
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.status(200).send("Order cancelled successfully");
    })
    .catch((error) => res.status(500).send("Error cancelling order: " + error));
};
