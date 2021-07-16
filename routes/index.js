const express = require('express')
const router = express.Router()

const home = require('./modules/home') // 引入 home 模組程式碼
const restaurants = require('./modules/restaurants')

router.use('/', home) // 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/restaurants', restaurants)

module.exports = router