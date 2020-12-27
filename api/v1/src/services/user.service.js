const { user, vocabulary } = require('../models/index')

const findByChatId = async chatId => {
  return await user.findAll({
    where: {
      chat_id: chatId
    }
  }).then(item => {
    return item
  })
}

const save = async (ctx, chatId, name, email) => {
  return await user.create({
    chatId: chatId,
    name: name,
    email: email
  }).then(item => {
    return item
  }).catch(err => {
    ctx.throw(500, err.message)
  })
}

const getUsersId = async () => {
  user.hasMany(vocabulary)

  return await user.findAll({
    attributes: ['id', 'chat_id'],
    include: [{
      attributes: [],
      model: vocabulary,
      required: true
    }]
  }).then(items => {
    return items
  })
}

module.exports = {
  findByChatId,
  save,
  getUsersId,
}