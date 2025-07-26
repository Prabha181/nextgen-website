import express from "express";
import { create, findAll, update, remove } from "../controllers/user.controller.js";

const router = express.Router();

export default (app) => {
  router.post("/", create);
  router.get("/", findAll);
  router.put("/:id", update);
  router.delete("/:id", remove);
  app.use("/api/users", router);
};
