const Router = require('koa-router')
const controller = require('./controller/english.controller')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/english', controller.sendMessage)

module.exports = router