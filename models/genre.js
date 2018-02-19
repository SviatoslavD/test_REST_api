var mongoose = require('mongoose');

// Genre Shcema
var genreSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
};

// Create Genres
module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
};

// Update Genres
module.exports.updateGenre = function(id, genre, options, callback) {
  var query = {_id: id};
  var update = {name: genre.name};
  Genre.findOneAndUpdate(query, update, options, callback);
};
