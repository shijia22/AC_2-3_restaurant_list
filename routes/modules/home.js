const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant') // 載入 restaurant model
const restaurantList = require('../../models/seeds/restaurantSeeder')

// index
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.error(error))
})

// searches
router.get('/searches', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      if (keyword) {
        restaurants = restaurants.filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(keyword) ||
            restaurant.category.includes(keyword)
        )
      }
      if (restaurants.length === 0) {
        const error = '很遺憾，沒有符合搜尋的結果。'
        return res.render('index', { error })
      }
      res.render('index', {
        restaurants,
      })
    })
    .catch((error) => console.error(error))
})

module.exports = router
