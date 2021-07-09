const mongoose = require('mongoose')

const Restaurant = require('../restaurant')
const data = require('./restaurant.json') // 命名變數，便於維護
const restaurantList = data.results //  載入 JSON

mongoose.connect('mongodb://localhost/menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// connect to database
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  // 建立資料，定義內容
  restaurantList.forEach((restaurant) =>
    Restaurant.create({
      id: restaurant.id,
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
  )
  console.log('done.')
})
