const test = ctx => {
  ctx.body = 'Let\'s learning English!!!'

  console.log('Inside the request body:')
  console.log(ctx.request.body)

  try {
    const chatMessage = ctx.request.body
    const chat_id = chatMessage.message.chat.id
    const userName = chatMessage.message.from.first_name

    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=Olá ${userName}`
    console.log('URL to send POST: ', url)

    console.log(process.env)
    console.log('NOW:')
    console.log(process.env.BOT_TOKEN)
  } catch(err) {
    console.log('Error to read env var: ', err)
  }

}

const test2 = ctx => {
  ctx.body = 'Vamos aprender Portugues!!!'
}

module.exports = {
  test,
  test2
}