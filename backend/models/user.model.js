const initUserModel = (sequelize, Sequelize) => {
  return sequelize.define("user", {
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
  });
};

export default initUserModel;
