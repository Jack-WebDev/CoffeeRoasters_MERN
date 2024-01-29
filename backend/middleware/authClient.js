import { database } from "../models/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const DoesUserExist = async (email) => {
  const query = "SELECT * FROM Clients WHERE Email = ?";
  const value = [email];

  try {
    const [rows] = await database.query(query, value);
    console.log(rows);
    return rows.length > 1;
  } catch (error) {
    console.error(`Error has occurred during login ${error}`);
  }
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(`Error hashing password ${error}`);
  }
};

const comparePasswords = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error(`Error unHashing and comparing passwords ${error}`);
  }
};

const generateToken = async (res, email) => {
  const token = jwt.sign(
    {
      email: email,
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
  });

  // console.log(token)
  // res.cookie("jwtToken", token, {
  //   httpOnly: true,
  //   maxAge: 1 * 60 * 60 * 1000,
  // });
};

export { DoesUserExist, hashPassword, comparePasswords, generateToken };
