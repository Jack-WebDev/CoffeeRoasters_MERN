// TODO: Install Validator
import { database } from "../models/db.js";
import {
  DoesUserExist,
  hashPassword,
  comparePasswords,
} from "../middleware/authClient.js";
import { generateToken } from "../utils/generateToken.js";

const registerClient = async (req, res) => {
  const { name, email, password, address } = req.body;

  if (!name || !email || !password || !address) {
    throw Error("Field cannot be empty!");
  }

  const userExists = await DoesUserExist(email);

  if (userExists) {
    throw Error("This user already exists");
  }

  try {
    const hashedPassword = await hashPassword(password);
    const query =
      "INSERT INTO Clients (Name, Email, Password, Address) Values(?,?,?,?)";

    const values = [name, email, hashedPassword, address];

    const data = await database.query(query, values);
    res.status(201).json({ data });
  } catch (error) {
    console.error(`Error registering client ${error}`);
  }
};

const loginClient = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw Error("Field cannot be empty!");
  }

  try {
    const query = "SELECT * FROM Clients WHERE Email = ?";
    const value = [email];

    const [rows] = await database.query(query, value);

    console.log(rows);
    if (rows.length === 0) {
      throw Error("Invalid Email! Try again.");
    }
    const client = rows[0];

    const isPasswordValid = comparePasswords(password, client.Password);

    if (!isPasswordValid) {
      throw Error("Invalid Password! Try again.");
    }

    generateToken(res, client.ClientID);
    res.status(200).json({ client });
  } catch (error) {
    console.error("Error loggin in", error);
  }
};

const logOutClient = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json("Client Logged Out!");
};

const getAllClients = async (req, res) => {
  try {
    const query = "SELECT * FROM Clients";

    const data = await database.query(query);

    res.status(200).json({ data });
  } catch (error) {
    console.error(`Error getting clients ${error}`);
  }
};

const getClientProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM Clients WHERE ClientID = ?";
    const value = [id];

    const [data] = await database.query(query, value);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Failed to get client profile");
  }
};

const updateClient = async (req, res) => {
  const { name, email, password, address } = req.body;
  const { id } = req.params;

  try {
    const clientID = parseInt(id, 10);

    const query =
      "UPDATE Clients SET Name = ?, Email = ?, Password = ?, Address = ? WHERE ClientID = ?";
    const values = [name, email, password, address, clientID];

    const [data] = await database.query(query, values);
    res.status(201).json({ data });
  } catch (error) {
    console.error("Failed to update client details!");
  }
};

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM Clients WHERE ClientID = ?";
    const value = [id];

    const [data] = await database.query(query, value);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Failed to delete client account.");
  }
};

export {
  registerClient,
  loginClient,
  logOutClient,
  getAllClients,
  getClientProfile,
  updateClient,
  deleteClient,
};
