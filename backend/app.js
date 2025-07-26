import express from "express";
import cors from "cors";
import db from "./models/index.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// ✅ FIX: Allow frontend access
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

db.sequelize.sync();

userRoutes(app);

app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

export default app;
