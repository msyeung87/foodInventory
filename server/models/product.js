var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
  name: String,
  quantity: String,
  price: String
});