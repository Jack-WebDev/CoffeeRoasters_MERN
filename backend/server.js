import express from "express";
import { clientRouter } from "./routes/clientRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth/", clientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
