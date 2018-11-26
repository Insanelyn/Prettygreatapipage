const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    product_name: String,
    price: Number,
    color: String,
    stock: Number,
    category: String,
    image: String,
    long_description: String
});

module.exports = mongoose.model('Article', ArticleSchema);
