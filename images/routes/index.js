var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render("index");
});
router.post('/index', function(req, res, next) {
  console.log(req.body.value);
  res.render("index",{a1:req.body.value});
});

module.exports = router;
