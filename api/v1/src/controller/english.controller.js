const axios = require('axios')

const test = ctx => {
  const chatMessage = ctx.request.body
  const chat_id = chatMessage.message.chat.id
  const userName = chatMessage.message.from.first_name

  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=Olá ${userName}`
  
  axios.post(url)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}

const test2 = ctx => {
  ctx.body = 'Vamos aprender Portugues!!!'
}

module.exports = {
  test,
  test2
}