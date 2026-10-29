
import Order from "../../models/admin/Order.js";

// UPDATE ORDER
export const updateOrderController = (req, res) => {
  const {
    orderId,
    orderStatus,
    riderId
  } = req.body;

  Order.findOne({ _id: orderId })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      order.orderStatus = orderStatus;
      order.riderId = riderId;

      order.save()
        .then(() => res.status(200).send("Order updated successfully"))
        .catch((error) =>
          res.status(500).send("Error updating order: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding order: " + error)
    );
};


// DELETE ORDER
export const deleteOrderController = (req, res) => {
  const { orderId } = req.params;

  Order.findOne({ _id: orderId })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      if (order.orderStatus !== "pending" && order.orderStatus !== "cancelled") {
        return res.status(400).send("Only pending or cancelled orders can be deleted");
      }

      Order.findOneAndDelete({ _id: order._id })
        .then(() => res.status(200).send("Order deleted successfully"))
        .catch((error) =>
          res.status(500).send("Error deleting order: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding order: " + error)
    );
};
