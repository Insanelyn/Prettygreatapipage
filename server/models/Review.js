const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Article = require('./Article.js')

const ReviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
    author: String,
    text: String,
    rating: String,
    article:[{
   _id: { type: mongoose.Schema.Types.ObjectId, ref:"Article"},
   product_name: String,
   price: Number
}]
});

module.exports = mongoose.model('reviews', ReviewSchema);
