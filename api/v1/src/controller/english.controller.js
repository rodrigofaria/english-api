const axios = require('axios')

const sendMessage = async ctx => {
  const chatMessage = ctx.request.body
  const chat_id = chatMessage.message.chat.id
  const userName = chatMessage.message.from.first_name

  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=Hello ${userName}`
  
  console.log(chatMessage.message.text)
  console.log(`URL to send message: ${url}`)

  return await axios.post(url)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
      ctx.status = 200
      ctx.body = 'Message sent with success'
    })
    .catch(error => {
      console.log('Error sending message')
      console.error(error)
      ctx.body = err
      ctx.status = 500
    })
}

module.exports = {
  sendMessage
}