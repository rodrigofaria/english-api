const Router = require('koa-router')
const controller = require('./controller/english.controller')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/english', controller.test)
router.post('/portuguese', controller.test2)

module.exports = router