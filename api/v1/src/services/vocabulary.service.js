const { vocabulary } = require('../models/index')

const save = async (ctx, userId, word, phrase) => {
  let minValue = await getMinCounter(userId)
  const counter = isNaN(minValue) ? 0 : minValue

  return await vocabulary.create({
    userId: userId,
    word: word,
    phrase: phrase,
    counter: counter
  }).then(item => {
    return item
  }).catch(err => {
    ctx.throw(500, err.message)
  })
}

const getMinCounter = async userId => {
  return await vocabulary.min('counter',
  {
    where: {
      user_id: userId
    }
  }).then(item => {
    return item
  })
}

module.exports = {
  save,
}