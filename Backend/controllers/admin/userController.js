
import User from "../../models/admin/user.js";
// ADMIN SIGNUP
export const adminSignupController = (req, res) => {
  const {
    fullName,
    email,
    phone,
    password
  } = req.body;

  const newAdmin = new User({
    fullName: fullName,
    email: email,
    phone: phone,
    password: password,
    role: "admin"
  });

  newAdmin.save()
    .then(() => res.status(201).send("Admin added successfully"))
    .catch((error) =>
      res.status(500).send("Error adding admin: " + error)
    );
};


// ADMIN LOGIN
export const adminLoginController = (req, res) => {
  const {
    email,
    password
  } = req.body;

  User.findOne({
    email: email,
    password: password,
    role: "admin"
  })
    .then((admin) => {
      if (!admin) {
        return res.status(401).send("Invalid email or password");
      }

      res.status(200).send("Admin login successful");
    })
    .catch((error) =>
      res.status(500).send("Error logging in: " + error)
    );
};
