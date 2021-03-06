const Koa = require('koa')
const KoaBody = require('koa-body')
const router = require('./api/v1/src/routes.config')

const app = new Koa()

app.use(KoaBody())
app.use(router.routes())

const port = process.env.PORT | 3000

app.listen(port, () => console.log(`Server started and listening port ${port}`))