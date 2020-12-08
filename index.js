const Koa = require('koa')
const KoaBody = require('koa-body')
const router = require('./api/v1/src/routes.config')
const index = require('./api/v1/src/models')

const app = new Koa()

app.use(KoaBody())
app.use(router.routes())

const port = process.env.PORT | 3000

app.listen(port, () => console.log(`Server started and listening port ${port}`))


test(index.sequelize)

const test = async seq => {
  try {
    console.log('RODRIGO 1.0')
    await seq.authenticate()
    console.log('RODRIGO 1.1')
  } catch (err) {
    console.log('RODRIGO 2.0')
    console.log(err)
  }
  console.log('RODRIGO 2')
}