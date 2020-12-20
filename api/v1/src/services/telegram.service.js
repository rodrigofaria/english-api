const axios = require('axios')

const sendMessage = async (ctx, chatId, message) => {
  const url = encodeURI(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${message}`)
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
  sendMessage,
}