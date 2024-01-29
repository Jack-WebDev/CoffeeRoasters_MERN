import { database } from "../models/db.js";
import bcrypt from "bcrypt";

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



export { DoesUserExist, hashPassword, comparePasswords};
