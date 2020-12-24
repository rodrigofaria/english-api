const userService = require('../services/user.service')
const vocabularyService = require('../services/vocabulary.service')
const telegramService = require('../services/telegram.service')

const sendMessage = async ctx => {
  const chatMessage = ctx.request.body
  const chatId = chatMessage.message.chat.id
  const userName = chatMessage.message.from.first_name
  const user = await userService.findByChatId(chatId)
  
  if (user.length === 0) {
    saveUser(ctx, chatId, userName)
  
  } else if (!user[0].email) {
    saveEmail(user[0], chatMessage.message.text, ctx, chatId)

  } else if (!chatMessage.message.text.includes('=')) {
    let message = `Olá ${userName}!\n`
    await telegramService.sendMessage(ctx, chatId, message)
    informHowToAddWord(ctx, chatId)
  
  } else {
    const word = chatMessage.message.text.split('=')[0]
    const phrase = chatMessage.message.text.split('=')[1]
    await vocabularyService.save(ctx, user[0].id, word, phrase)
    message = `Palavra adicionada ao seu dicionário!`
    await telegramService.sendMessage(ctx, chatId, message)
  }

  return setStatus(ctx)
}

const saveUser = async (ctx, chatId, userName) => {
  await userService.save(ctx, chatId, userName)
  let message = `Olá ${userName}!\nPor favor, informe seu e-mail`
  await telegramService.sendMessage(ctx, chatId, message)
}

const saveEmail = async (user, email, ctx, chatId) => {
  user.email = email
  await user.save()
  let message = `E-mail salvo com sucesso!`
  await telegramService.sendMessage(ctx, chatId, message)
  informHowToAddWord(ctx, chatId)
}

const informHowToAddWord = async (ctx, chatId) => {
  let message = `Você pode enviar suas palavras e frases para serem gravadas aqui!`
  await telegramService.sendMessage(ctx, chatId, message)
  message = `O formato de envio é:`
  await telegramService.sendMessage(ctx, chatId, message)
  message = `palavra=frase`
  await telegramService.sendMessage(ctx, chatId, message)
  message = `Por exemplo:`
  await telegramService.sendMessage(ctx, chatId, message)
  message = `tallest=he is the tallest boy in my school class`
  await telegramService.sendMessage(ctx, chatId, message)
}

const setStatus = ctx => {
  ctx.status = 200
  ctx.body = 'Success!'
}

const test = ctx => {
  const now = new Date()
  console.log(`ENGLISH API CALLED AT ${now}`)
  return setStatus(ctx)
}

module.exports = {
  sendMessage,
  test,
}