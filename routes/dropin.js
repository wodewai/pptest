var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dropin', { title: 'BT DropIn UI' });
});

module.exports = router;
