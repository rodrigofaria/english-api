const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const config = require('../../../../config')

const db = {}

console.log('RODRIGO 1')
let sequelize = new Sequelize(config.database, config.username, config.password, config)
test(sequelize)

const test = async seq => {
  try {
    console.log('RODRIGO 1.0')
    await seq.authenticate()
    console.log('RODRIGO 1.1')
  } catch (err) {
    console.log('RODRIGO 2.0')
    console.log(err)
  }
  console.log('RODRIGO 2')
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db