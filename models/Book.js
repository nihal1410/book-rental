// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    available: {
        type: Boolean,
        default: true
    }
    // Add more fields as needed for book information
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
