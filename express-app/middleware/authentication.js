//This doesn't work as in here, this is just example code how you can acheive user authentication.

//for token, you first have to generate to a token and set to cookie. I have add it in routes

import jwt from "jsonwebtoken";
import { registrationModel } from "../models/registrationmodel.js";
export const authenticate = async (req, res, next) => {
  //get token from cookie set to user's browser
  const token = req.cookies.jwt;
  if (!token) return res.status(404).json({ error: 1, message: "Login First" });
  const isVerify = jwt.verify(token, "yoursecretkeyhere");
  if (!isVerify)
    return res.status(400).json({ error: 1, message: "Login First" });

  //get the details of user according to the token
  const rootUser = await registrationModel.findById({ _id: isVerify._id });

  req.rootUser = rootUser;
  next();
};
