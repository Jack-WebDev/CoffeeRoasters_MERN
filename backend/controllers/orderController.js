import { database } from "../models/db.js";

const createOrder = async (req, res) => {
  const { preference, beanType, quantity, grindOption, delivery } = req.body;

  try {
    const query =
      "INSERT INTO Orders (Preference, BeanType, Quantity, GrindOption, Delivery) VALUES (?,?,?,?,?)";
    const values = [preference, beanType, quantity, grindOption, delivery];

    const data = await database.query(query, values);
    res.status(201).json({ data });
  } catch (error) {
    console.error("Error creating order", error);
  }
};

const getOrder = async (req, res) => {
  try {
    const query = "SELECT * FROM Orders";

    const data = await database.query(query);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error getting order", error);
  }
};

const updateOrder = async (req, res) => {
  const { preference, beanType, quantity, grindOption, delivery } = req.body;
  const { id } = req.params;

  try {
    const orderID = parseInt(id, 10);
    const query =
      "UPDATE Orders SET Preference = ?, BeanType = ?, Quantity = ?, GrindOption = ?, Delivery = ? WHERE OrderID = ?";
    const values = [
      preference,
      beanType,
      quantity,
      grindOption,
      delivery,
      orderID,
    ];

    const data = await database.query(query, values);
    res.status(201).json({ data });
  } catch (error) {
    console.error("Error updating order", error);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const orderID = parseInt(id, 10);
    const query = "DELETE FROM Orders WHERE OrderID = ?";
    const value = [orderID];

    const [data] = await database.query(query, value);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error deleting order", error);
  }
};

export { createOrder, getOrder, updateOrder, deleteOrder };
