var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res) {
  res.render('user');
});

module.exports = router;
