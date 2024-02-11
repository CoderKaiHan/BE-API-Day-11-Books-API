//Dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

//Middlewares
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI);


//Root index
app.get('/', (req,res) => {
    res.send('Hello world.')
});

//Route - books
app.use('/books', require('./controllers/books_controllers'));

app.listen(process.env.PORT)