var dotenv = require('dotenv');
dotenv.load();

const api_key = process.env.API_KEY;
const searchUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key;
const trendingUrl = 'http://api.giphy.com/v1/gifs/trending?api_key=' + api_key;

var express = require('express');
var request = require('request');

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express',});
});

router.get('/search/:query', (req, res, next) => {
  let query = req.params.query;
  request(searchUrl + '&q=' + query, (err, body) => {
    return res.json(body);
  });
});

router.get('/latest', (req, res, next) => {
  request(trendingUrl, (err, body) => {
    return res.json(body);
  });
});


module.exports = router;
