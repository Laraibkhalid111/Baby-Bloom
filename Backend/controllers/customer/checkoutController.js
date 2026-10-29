
import Order from "../../models/admin/Order.js";

// CUSTOMER CHECKOUT
export const checkoutController = (req, res) => {
  const {
    fullName,
    email,
    phone,
    address,
    city,
    area,
    paymentMethod,
    deliveryInstructions
  } = req.body;

  const newOrder = new Order({
    fullName: fullName,
    email: email,
    phone: phone,
    address: address,
    city: city,
    area: area,
    paymentMethod: paymentMethod,
    deliveryInstructions: deliveryInstructions
  });

  newOrder.save()
    .then(() => res.status(201).send("Order placed successfully"))
    .catch((error) =>
      res.status(500).send("Error placing order: " + error)
    );
};
