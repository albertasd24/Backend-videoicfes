import Express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/database.js";
import { actualiarSitioObtenerController, sitioObtenerController } from "./controller/sitioController.js";

dotenv.config()
const app = Express();
const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(json())

// routesApi(app);
dbConnect();
app.get("/api/sitios", sitioObtenerController)
app.put("/api/sitios/:id", actualiarSitioObtenerController)
app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log("Server runing in port:", PORT || 3000);
});
