// ✅ backend/index.js
import express from "express";
import cors from "cors";
import db from "./models/index.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for both dev and production frontend
app.use(cors({
  origin: ["http://localhost:3000", "https://nextgen-website-xi.vercel.app"],
  credentials: true,
}));

app.use(express.json());
app.use("/api/users", userRoutes);

// ✅ Sync DB and start server
db.sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("Failed to sync database:", err);
});
