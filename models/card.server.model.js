var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cardSchema = new Schema({
  info: String
});

// export model
module.exports = mongoose.model('cards', cardSchema);
