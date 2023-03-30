module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
'Users', 
{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
{ timestamps: false, underscored: true, tableName: 'users' },
);

  return Users;
};
