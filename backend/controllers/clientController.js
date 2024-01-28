// TODO: Install Validator
import { database } from "../models/db.js";
import {
  DoesUserExist,
  hashPassword,
  comparePasswords,
  generateToken,
} from "../middleware/authClient.js";

const registerClient = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw Error("Field cannot be empty!");
  }

  const userExists = DoesUserExist(email);

  if (userExists) {
    throw Error("This user already exists");
  }

  try {
    const query = "INSERT INTO Clients (Name, Email, Password) Values(?,?,?)";
    const hashedPassword = hashPassword(password);

    const values = [name, email, hashedPassword];

    await database.query(query, values);
    res.status(201).json("Client Registered!");
  } catch (error) {
    console.error(`Error registering client ${error}`);
  }
};

const loginClient = async (req, res) => {
  const { email, password } = req.body;

  if (!email || password) {
    throw Error("Field cannot be empty!");
  }

  try {
    const query = "SELECT * FROM Clients WHERE Email = ?";
    const value = [email];

    const [rows] = await database.query(query, value);

    if (rows.length === 0) {
      throw Error("Invalid Email! Try again.");
    }
    const client = rows[0];

    const isPasswordValid = comparePasswords(password, client.Password);

    if (!isPasswordValid) {
      throw Error("Invalid Password! Try again.");
    }

    generateToken();

    res.status(200).json("Client Logged In!");
  } catch (error) {}
};

const logOutClient = async (req, res) => {
  res.clearCookie("jwtToken");
  res.status(200).json("Client Logged Out!");
};

const getClientProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM Clients WHERE ClientID = ?";
    const value = [id];

    await database.query(query, value);
    res.status(200).json("Client Profile");
  } catch (error) {
    console.error("Failed to get client profile");
  }
};

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const query =
      "UPDATE Clients SET Name = ?, SET Email = ?, SET Password = ? WHERE ClientID = ?";
    const values = [name, email, password, id];

    await database.query(query, values);
    res.status(201).json("Client Updated!");
  } catch (error) {
    console.error("Failed to update client details!");
  }
};
const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM Clients WHERE ClientID = ?";
    const value = [id];

    await database.query(query, value);
    res.status(200).json("Client Deleted!");
  } catch (error) {
    console.error("Failed to delete client account.");
  }
};

export {
  registerClient,
  loginClient,
  logOutClient,
  getClientProfile,
  updateClient,
  deleteClient,
};
