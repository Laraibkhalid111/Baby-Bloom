import Contact from "../../models/customer/Contact.js";

export const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact message added successfully" });
  } catch (error) {
    console.error("Error adding contact message:", error);
    res.status(500).json({ message: "Error adding contact message", error });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error getting contact messages:", error);
    res.status(500).json({ message: "Error getting contact messages", error });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error getting contact message:", error);
    res.status(500).json({ message: "Error getting contact message", error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact message deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact message:", error);
    res.status(500).json({ message: "Error deleting contact message", error });
  }
};
