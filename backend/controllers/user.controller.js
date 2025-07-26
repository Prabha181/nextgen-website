import db from "../models/index.js";
const User = db.users;

export const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const findAll = async (_, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    res.send({ message: "Updated" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.send({ message: "Deleted" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
