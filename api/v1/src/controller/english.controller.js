const test = ctx => {
  ctx.body = 'Let\'s learning English!!!'

  console.log('Inside the request body:')
  console.log(ctx.request.body)


  try {
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