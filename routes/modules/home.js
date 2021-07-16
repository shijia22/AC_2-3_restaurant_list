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
module.exports = router