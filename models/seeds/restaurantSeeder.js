const data = require('./restaurant.json') // 命名變數，便於維護
const restaurantList = data.results //  載入 JSON

const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')

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
