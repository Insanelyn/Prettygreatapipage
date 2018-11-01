"use strict"
let mongoose = require("mongoose");
let Article = require("../models/Article.js");
let ArticleSchema = require('mongoose').model('Article').schema;
var cors = require('cors')
let app = require("../app.js")
const path = require('path');

class mongo {
  constructor(){
    this._loadSchema();
    this._connect();
  }

  _loadSchema(){
    this._ArticleSchema = mongoose.model('article', ArticleSchema)
  }

  _connect(){
    const mongoDB = 'mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true';
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    console.log("Connected to mongodb")

  }

  getArticles(skip, limit, price, category) {
    return Article.find()
    .select('id product_name price category short_description long_description color image')
    .sort(price ? { price: price } : { id: 1 })
    .skip(skip)
    .limit(limit)
    .where(category ? Article.find({ 'category': category }) : Article.find())

  }
  postArticle(body) {
     return new Article({
           id: mongoose.Types.ObjectId(),
           product_name: body.product_name,
           price: body.price,
           category: body.category,
           color: body.color,
           short_description: body.short_description,
           long_description: body.long_description,
           image: body.image
         }).save()
   }
  getArticleById(req, res) {
    Article.findById(req.params.articleId, (err, article)=>{
      res.json(article)
    })
  }

  deleteArticle(req, res){
    Article.findById(req.params.articleId).then(article => {
      article.remove()
      res.status(200).json(article);
    }).catch(err => console.log('Errormessage: ', err));
  }

  patchArticle(req,res){
    Article.findById(req.params.articleId, (err, article) => {
      for( let a in req.body ){
        article[a] = req.body[a];
      }
      article.save();
      res.json(article);
    })
  }

  putArticle(req, res) {
    Article.findById(req.params.articleId, (err, article) => {
      article.product_name = req.body.product_name;
      article.price = req.body.price;
      article.save()
      res.json(article)
    })
  }
}


const database = new mongo();





// postJSON(req, res){
//   json.forEach((article, res) => {
//     article = new Article({
//       id: new mongoose.Types.ObjectId(),
//       id: article.id,
//       product_name: article.product_name,
//       price: article.price,
//       color: article.color,
//       category: article.category,
//       short_description: article.short_description,
//       long_description: article.long_description,
//       image: article.image
//     })
//     .save()
//     .then(article => console.log(article))
//     .catch(error => console.log('errormessage: ', error))
//
//   });
// }
