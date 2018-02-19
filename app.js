var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connect Mongoose
// DB - 'store'
mongoose.connect('mongodb://localhost/store');
var db = mongoose.connection;

// Set home page route - GET
app.get('/', function(req, res) {
  res.send('Responce on home page GET request');
});

app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  })
});

app.post('/api/genres', function(req, res) {
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  })
});

app.put('/api/genres/:id', function(req, res) {
  var id = req.params.id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  })
});

app.get('/api/books', function(req, res) {
  Book.getBooks(function(err, books){
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get('/api/books/:id', function(req, res) {
  Book.getBookById(req.params.id, function(err, book){
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post('/api/books', function(req, res) {
  var book = req.body;
  Book.addBook(book, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.put('/api/books/:id', function(req, res) {
  var id = req.params.id;
  var book = req.body;
  Book.updateBookById(id, book, {}, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.listen(3000);
console.log('Running on port 3000...');
