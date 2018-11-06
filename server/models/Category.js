const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Category', CategorySchema);
