import express from "express";
import { create, findAll, update, remove } from "../controllers/user.controller.js";
import db from "../models/index.js";

const router = express.Router();

// ✅ Google login POST handler
router.post("/google", async (req, res) => {
  const { name, email } = req.body;
  try {
    const [user, created] = await db.users.findOrCreate({
      where: { email },
      defaults: { name }
    });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error saving user from Google login:", err);
    res.status(500).json({ error: "Failed to save user" });
  }
});

// ✅ Regular CRUD routes
router.post("/", create);
router.get("/", findAll);
router.put("/:id", update);
router.delete("/:id", remove);

export default (app) => {
  app.use("/api/users", router);
};
