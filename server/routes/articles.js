const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', function (req, res, next) {
  let perPage = 9;
  let price = req.query.price;
  let stock = req.query.stock;
  let page = parseInt(req.query.page) || 0;
  let pages = 0;
  let nextUrl = '';
  let prevUrl = '';
  console.log("price", price);
  Article.count().exec(function (err, count) {
    Article.find()
      .limit(perPage)
      .skip(perPage * page)
      // .sort({price: price})
      .exec(function (err, articles) {
        pages = Math.floor(count / perPage);
        if (page === 0) {
          console.log("if")
          res.json({
            articles,
            currentPage: page,
            pages,
            count,
            prevUrl: ``,
            nextUrl: `http://localhost:3000/articles?page=${page + 1}`
          })

        } else if (page === pages - 1) {
          console.log("else if 1")

          res.json({
            articles: articles,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/articles?page=${page - 1}`,
            nextUrl: ``
          })
        } else if (page > 0 && page < pages) {
          console.log("else if 2")
          res.json({
            articles: articles,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/articles?page=${page - 1}`,
            nextUrl: `http://localhost:3000/articles?page=${page + 1}`
          })
        }else {
          console.log("else")

          res.redirect('/articles')
}

      });
  });
});

router.get('/:id', function (req, res, next) {
  Article.findById(req.params.id, function (err, article) {
    if (err) return console.log(err);
    res.status(200).json(article);
  })
});




module.exports = router;
