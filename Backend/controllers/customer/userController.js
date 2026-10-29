
import User from "../../models/customer/User.js";

// SIGNUP
export const signup = (req, res) => {
  const {
    fullName,
    email,
    phone,
    password
  } = req.body;

  const newUser = new User({
    fullName: fullName,
    email: email,
    phone: phone,
    password: password,
    role: "customer"
  });

  newUser.save()
    .then(() => res.status(201).send("User added successfully"))
    .catch((error) => res.status(500).send("Error adding user: " + error));
};


// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email, password: password })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }

      res.status(200).send({
        message: "Login successful",
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      });
    })
    .catch((error) => res.status(500).send("Error logging in: " + error));
};


// VIEW ALL USERS
export const getUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch((error) => res.status(500).send("Error getting users: " + error));
};


// VIEW ONE USER
export const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(500).send("Error getting user: " + error));
};


// UPDATE USER
export const updateUser = (req, res) => {
  const { id } = req.params;

  User.findOneAndUpdate(
    { _id: id },
    req.body,
    { runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }

      res.status(200).send("User updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating user: " + error));
};


// DELETE USER
export const deleteUser = (req, res) => {
  const { id } = req.params;

  User.findOneAndDelete({ _id: id })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }

      res.status(200).send("User deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting user: " + error));
};
