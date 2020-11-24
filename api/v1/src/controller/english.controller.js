const test = ctx => {
  ctx.body = 'Let\'s learning English!!!'

  console.log('Inside the request body:')
  console.log(ctx.request.body)
}

const test2 = ctx => {
  ctx.body = 'Vamos aprender Portugues!!!'
}

module.exports = {
  test,
  test2
}