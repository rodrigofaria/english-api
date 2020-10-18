const Koa = require('koa')
const router = require('./api/v1/src/routes.config')

const app = new Koa()

app.use(router.routes())

app.listen(3000, () => console.log('Server started and listening port 3000'))
