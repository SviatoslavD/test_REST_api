var mongoose = require('mongoose');

// Book Shcema
var bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    require: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
};

// Get Book by id
module.exports.getBookById = function(id, callback) {
  Book.findById(id, callback);
};

// Create Book
module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
};

// Update Book
module.exports.updateBookById = function(id, book, options, callback) {
  var query = {_id: id};
  var update = {
    title: book.title,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages
  };
  Book.findOneAndUpdate(query, update, options, callback);
};
