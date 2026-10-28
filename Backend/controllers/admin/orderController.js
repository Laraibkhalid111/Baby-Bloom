import Order from "../../models/admin/Order.js";
import Product from "../../models/admin/product.js";

export const addOrder = async (req, res) => {
  try {
    const items = [];
    let totalAmount = 0;

    for (const item of req.body.items || []) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ message: "Quantity must be a positive integer" });
      }

      items.push({
        productId: product._id,
        productName: product.pname,
        quantity,
        price: product.pprice,
      });
      totalAmount += product.pprice * quantity;
    }

    const newOrder = new Order({
      ...req.body,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order added successfully", order: newOrder });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ message: "Error adding order", error });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).json({ message: "Error getting orders", error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error getting order:", error);
    res.status(500).json({ message: "Error getting order", error });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Error updating order", error });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: "cancelled" },
      { new: true }
    );
    res.status(200).json(order);
  } catch (error) {
    console.error("Error cancelling order:", error);
    res.status(500).json({ message: "Error cancelling order", error });
  }
};
