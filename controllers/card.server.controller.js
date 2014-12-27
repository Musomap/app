var Cards = require('../models/card.server.model.js');

exports.list = function(req, res){
  var q = Cards.find();

  q.exec(function(err, results){
    res.send(results);
  });
};
