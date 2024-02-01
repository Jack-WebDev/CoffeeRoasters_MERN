import express from "express";
import {
  registerClient,
  loginClient,
  logOutClient,
  getClientProfile,
  updateClient,
  deleteClient,
  getAllClients,
} from "../controllers/clientController.js";
const clientRouter = express.Router();
import { verifyToken } from "../middleware/protectRoute.js";

clientRouter.post("/register", registerClient);
clientRouter.get("/clients", getAllClients);
clientRouter.post("/login", loginClient);
clientRouter.post("/logout", logOutClient);

clientRouter
  .route("/profile")
  .get(verifyToken, getClientProfile)
  .put(verifyToken, updateClient)
  .delete(verifyToken, deleteClient);

export { clientRouter };
