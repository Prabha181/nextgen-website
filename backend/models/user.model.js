// models/user.model.js ✅
const initUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return User;
};

export default initUserModel;
