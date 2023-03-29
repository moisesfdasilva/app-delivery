module.exports = (sequelize, DataTypes) => {
  const UsersModel = sequelize.define(
'users', 
{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
{ timestamps: false, underscored: true, tableName: 'users' },
);

  return UsersModel;
};
