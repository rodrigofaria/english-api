module.exports = (sequelize, DataTypes) => {
  const Vocabulary = sequelize.define('vocabulary', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    word: DataTypes.STRING,
    phrase: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  })

  return Vocabulary
}
