module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    chatId: {
      type: DataTypes.INTEGER,
      field: 'chat_id',
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })

  return User
}
