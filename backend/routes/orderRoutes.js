import { verifyToken } from "../middleware/protectRoute.js";
import express from "express";
import {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
const orderRouter = express.Router();

orderRouter.post("/createOrder", verifyToken, createOrder);
orderRouter.get("/", getOrder);
orderRouter
  .route("/:id")
  .put(verifyToken, updateOrder)
  .delete(verifyToken, deleteOrder);

export { orderRouter };
