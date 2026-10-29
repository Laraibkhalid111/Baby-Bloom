
import Contact from "../../models/customer/Contact.js";

// ADD CONTACT
export const addContact = (req, res) => {
  const {
    fullName,
    email,
    subject,
    message
  } = req.body;

  const newContact = new Contact({
    fullName: fullName,
    email: email,
    subject: subject,
    message: message
  });

  newContact.save()
    .then(() => res.status(201).send("Contact message added successfully"))
    .catch((error) => res.status(500).send("Error adding contact: " + error));
};


// VIEW ALL CONTACTS
export const getContacts = (req, res) => {
  Contact.find()
    .then((contacts) => res.status(200).send(contacts))
    .catch((error) => res.status(500).send("Error getting contacts: " + error));
};


// VIEW ONE CONTACT
export const getContactById = (req, res) => {
  const { id } = req.params;

  Contact.findById(id)
    .then((contact) => res.status(200).send(contact))
    .catch((error) => res.status(500).send("Error getting contact: " + error));
};


// DELETE CONTACT
export const deleteContact = (req, res) => {
  const { id } = req.params;

  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      if (!contact) {
        return res.status(404).send("Contact not found");
      }

      res.status(200).send("Contact deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting contact: " + error));
};
