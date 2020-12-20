const { user } = require('../models/index')

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

module.exports = {
  findByChatId,
  save,
}