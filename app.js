const express = require('express')
const mongoose = require('mongoose')

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser') // 引用 body-parser
const methodOverride = require('method-override') // 載入 method-override
const Restaurant = require('./models/restaurant') // 載入 restaurant model 

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))
// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// 將 request 導入路由器
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
