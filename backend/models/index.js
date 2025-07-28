// ✅ backend/models/index.js
import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import initUserModel from "./user.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = initUserModel(sequelize, Sequelize);

export default db;
