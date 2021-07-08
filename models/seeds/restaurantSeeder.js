const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurant.json')

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
  Restaurant.create(restaurantList.results)
  console.log('done.')
})
