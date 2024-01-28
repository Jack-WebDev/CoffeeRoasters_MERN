import express from "express";
import {
  registerClient,
  loginClient,
  logOutClient,
  getClientProfile,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";
const clientRouter = express.Router();
import { verifyToken } from "../middleware/protectRoute.js";

clientRouter.post("/register", registerClient);
clientRouter.post("/login", loginClient);
clientRouter.post("/logout", logOutClient);

clientRouter
  .route("/:id")
  .get(verifyToken, getClientProfile)
  .put(verifyToken, updateClient)
  .delete(verifyToken, deleteClient);

export { clientRouter };
