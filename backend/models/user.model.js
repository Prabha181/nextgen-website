const initUserModel = (sequelize, Sequelize, DataTypes) => {
  return sequelize.define("user", {
    name: { 
      type: DataTypes.STRING 
    },
    email: { 
      type: DataTypes.STRING,
      unique: true
    },
  });
};

export default initUserModel;
