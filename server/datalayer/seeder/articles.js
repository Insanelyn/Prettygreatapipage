const express = require('express');
const router = express.Router();
const faker = require('faker');
const Article = require('../../models/Article');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["Accesories", "Gadgets", "Kitchen"];
    for (let i = 0; i < 32; i++) {
        let article = new Article({
            product_name : faker.name.firstName(),
            color : faker.commerce.color(),
            price : faker.random.number(115),
            stock : faker.random.number(15),
            category: categories[Math.floor(Math.random(6) * categories.length)],
            long_description : faker.lorem.paragraph(),
            image: faker.image.technics()
        })

        article.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});


module.exports = router;
