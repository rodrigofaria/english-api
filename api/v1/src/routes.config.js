const Router = require('koa-router')
const controller = require('./controllers/english.controller')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/english', controller.sendMessage)
router.post('/dailyWordReminder', controller.dailyWordReminder)

module.exports = router