var express = require('express');
var cardCtrl = require('../controllers/card.server.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return cardCtrl.list(req, res);
});

module.exports = router;
