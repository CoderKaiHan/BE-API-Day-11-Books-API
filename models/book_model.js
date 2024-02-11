const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    title: { type: String, required:true},
    description: String,
    year: Number,
    quantity: Number,
    img:String
});
  
module.exports = mongoose.model('Book', bookSchema);