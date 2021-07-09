const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant') // 載入 restaurant model 
const bodyParser = require('body-parser') // 引用 body-parser


mongoose.connect('mongodb://localhost/menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// 取得資料庫連線狀態
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))

// index
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.error(error))
})

// new (Create)
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/todos', (req, res) => {
  const {
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description,
  } = req.body.name // 從 req.body 拿出表單裡的 name 資料
  return Restaurant.create({
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description,
  }) // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch((error) => console.log(error))
})

// searches
app.get('/searches', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase())
    )
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// show
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === req.params.restaurant_id
  )
  res.render('show', { restaurant: restaurant })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
