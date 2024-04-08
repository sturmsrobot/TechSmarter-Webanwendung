import { registrationModel } from "../models/registrationmodel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const User = require("../models/Users");

// Route zum Abrufen aller Benutzer
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Fehler beim Abrufen des Benutzers:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};

//logic for user registration
export const registration = async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, password, confirmPassword } =
      req.body;
    const userExist = await registrationModel.findOne({ emailAddress });

    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !password ||
      !confirmPassword
    ) {
      return res
        .status(400)
        .json({ error: 1, message: "Must fill Everything" });
    } else {
      if (userExist)
        return res.status(400).json({
          error: 1,
          message: "User Already Exist with this Email, try using another",
        });

      if (password === confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);

        const users = new registrationModel({
          firstName,
          lastName,
          emailAddress,
          password: hashedPassword, // Store hashed password in the user object
          confirmPassword: hashedConfirmPassword, // Store hashed confirm password in the user object
        });

        await users.save();
        res
          .status(200)
          .json({ success: 1, message: "saved to database", users });
      } else {
        return res
          .status(400)
          .json({ error: 1, message: "Passwords do not match, try again" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
};
//logic for user login
export const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const userExist = await registrationModel.findOne({ emailAddress });
    if (!userExist) {
      return res
        .status(404)
        .json({ error: 1, message: "User with this email doesn't exist" });
    }
    const isVerify = await bcrypt.compare(password, userExist.password);
    if (isVerify) {
      const token = jwt.sign({ _id: userExist._id }, process.env.SECRET_KEY);

      res.cookie("jwt", token);
      return res
        .status(200)
        .json({ success: 1, message: "Login Successfull", token });
    } else if (!isVerify) {
      return res
        .status(400)
        .json({ error: 1, message: "Password is Incorrect" });
    }
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
};
