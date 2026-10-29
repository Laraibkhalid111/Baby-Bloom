
import Delivery from "../../models/deliveryRider/Delivery.js";

// ADD DELIVERY
export const addDelivery = (req, res) => {
  const {
    orderId,
    riderId,
    assignmentDate,
    deliveryStatus,
    deliveryNote
  } = req.body;

  const newDelivery = new Delivery({
    orderId: orderId,
    riderId: riderId,
    assignmentDate: assignmentDate,
    deliveryStatus: deliveryStatus,
    deliveryNote: deliveryNote
  });

  newDelivery.save()
    .then(() => res.status(201).send("Delivery added successfully"))
    .catch((error) => res.status(500).send("Error adding delivery: " + error));
};


// VIEW ALL DELIVERIES
export const getDeliveries = (req, res) => {
  Delivery.find()
    .then((deliveries) => res.status(200).send(deliveries))
    .catch((error) => res.status(500).send("Error getting deliveries: " + error));
};


// VIEW ONE DELIVERY
export const getDeliveryById = (req, res) => {
  const { id } = req.params;

  Delivery.findById(id)
    .then((delivery) => res.status(200).send(delivery))
    .catch((error) => res.status(500).send("Error getting delivery: " + error));
};


// UPDATE DELIVERY
export const updateDelivery = (req, res) => {
  const { id } = req.params;

  Delivery.findOneAndUpdate(
    { _id: id },
    req.body,
    { runValidators: true }
  )
    .then((delivery) => {
      if (!delivery) {
        return res.status(404).send("Delivery not found");
      }

      res.status(200).send("Delivery updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating delivery: " + error));
};


// DELETE DELIVERY
export const deleteDelivery = (req, res) => {
  const { id } = req.params;

  Delivery.findOneAndDelete({ _id: id })
    .then((delivery) => {
      if (!delivery) {
        return res.status(404).send("Delivery not found");
      }

      res.status(200).send("Delivery deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting delivery: " + error));
};
