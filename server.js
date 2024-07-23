import express from "express"
import { authRoutes } from "./routes/authRoutes.js";

const app = express();
const PORT = 3000;

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
}); 