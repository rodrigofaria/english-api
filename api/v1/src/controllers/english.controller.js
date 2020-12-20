const axios = require('axios')
const userService = require('../services/user.service')
const vocabularyService = require('../services/vocabulary.service')
const telegramService = require('../services/telegram.service')

const sendMessage = async ctx => {
  const chatMessage = ctx.request.body
  const chatId = chatMessage.message.chat.id
  const userName = chatMessage.message.from.first_name
  const user = await userService.findByChatId(chatId)
  let message = null
  
  if (user.length === 0) {
    await userService.save(ctx, chatId, userName)
    message = `Olá ${userName}!\nPor favor, informe seu e-mail`
    await telegramService.sendMessage(ctx, chatId, message)
    return
  } 
  
  let email = user[0].email
  if (!email) {
    email = chatMessage.message.text
    user[0].email = email
    await user[0].save()
    message = `E-mail salvo com sucesso!`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `A partir de agora você pode enviar suas palavras e frases!`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `O formato de envio é:`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `palavra=frase`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `Por exemplo:`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `tallest=he is the tallest boy in my school class`
    await telegramService.sendMessage(ctx, chatId, message)
    return
  }

  console.log(chatMessage.message.text)

  console.log(chatMessage.message.text.includes('='))
  
  if (!chatMessage.message.text.includes('=')) {
    message = `Olá ${userName}!\n`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `Você pode enviar suas palavras e frases para serem gravadas aqui!`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `O formato de envio é:`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `palavra=frase`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `Por exemplo:`
    await telegramService.sendMessage(ctx, chatId, message)
    message = `tallest=he is the tallest boy in my school class`
    await telegramService.sendMessage(ctx, chatId, message)
    return
  }

  const word = chatMessage.message.text.split('=')[0]
  const phrase = chatMessage.message.text.split('=')[1]
  await vocabularyService.save(ctx, user[0].id, word, phrase)
  message = `Palavra adicionada ao seu dicionário!`
  await telegramService.sendMessage(ctx, chatId, message)
}



const sendMessage2 = async ctx => {
  const chatMessage = ctx.request.body
  const chat_id = chatMessage.message.chat.id
  const userName = chatMessage.message.from.first_name

  const url = encodeURI(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=Hello ${userName}`)
  
  console.log(chatMessage.message.text)
  console.log(`URL to send message: ${url}`)

  return await axios.post(url)
    .then(res => {
      console.log(`statusCode: ${res.status}`)
      ctx.status = 200
      ctx.body = 'Message sent with success'
    })
    .catch(error => {
      console.log('Error sending message')
      console.error(error)
      ctx.body = error
      ctx.status = 500
    })
}

module.exports = {
  sendMessage
}