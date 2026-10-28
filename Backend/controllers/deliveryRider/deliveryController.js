import Delivery from "../../models/deliveryRider/Delivery.js";

export const addDelivery = async (req, res) => {
  try {
    const newDelivery = new Delivery({
      orderId: req.body.orderId,
      riderId: req.body.riderId,
      assignmentDate: req.body.assignmentDate,
      deliveryStatus: req.body.deliveryStatus,
      deliveryNote: req.body.deliveryNote,
    });

    await newDelivery.save();
    res.status(201).json({ message: "Delivery added successfully" });
  } catch (error) {
    console.error("Error adding delivery:", error);
    res.status(500).json({ message: "Error adding delivery", error });
  }
};

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (error) {
    console.error("Error getting deliveries:", error);
    res.status(500).json({ message: "Error getting deliveries", error });
  }
};

export const getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    res.status(200).json(delivery);
  } catch (error) {
    console.error("Error getting delivery:", error);
    res.status(500).json({ message: "Error getting delivery", error });
  }
};

export const updateDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(delivery);
  } catch (error) {
    console.error("Error updating delivery:", error);
    res.status(500).json({ message: "Error updating delivery", error });
  }
};
