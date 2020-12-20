const { vocabulary } = require('../models/index')

const save = async (ctx, userId, word, phrase) => {
  return await vocabulary.create({
    userId: userId,
    word: word,
    phrase: phrase
  }).then(item => {
    return item
  }).catch(err => {
    ctx.throw(500, err.message)
  })
}

module.exports = {
  save,
}