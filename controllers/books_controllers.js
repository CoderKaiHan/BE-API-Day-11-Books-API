const router = require('express').Router();
const booksDB = require('../models/book_model');


//Seeder
// router.get('/seed', (req, res) => {
//     booksDB.create([{
//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//       },
//       {
//         "title": "Tess the Wonder Dog",
//         "description": "The tale of a dog who gets super powers",
//         "year": 2007,
//         "quantity": 3,
//         "imageURL": "https://imgur.com/cEJmGKV.jpg"
//       },
//       {
//         "title": "The Annals of Arathrae",
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "year": 2016,
//         "quantity": 8,
//         "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//       },
//       {
//         "title": "Wâˆ€RP",
//         "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//         "year": 2010,
//         "quantity": 4,
//         "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//       }])
//         .then(() =>{
//             res.status(200).json({
//               message: 'Seed successful'
//             })
//         })
//         .catch((err) =>{
//             res.status(400).json({
//               message: 'Seed unsuccessful'
//         })
//     })
// })


//Index
router.get('/', (req, res) => {
    booksDB.find()
    .then( (books) => {
      res.status(200).json({books})})
    .catch(err =>{
      res.status(400).json('Error400')
    })
});


//Show
router.get('/:id', (req,res) => {
    booksDB.findById(req.params.id)
    .then((book) => {
        res.status(200).json({book})
    })
    .catch(err =>{
        res.status(400).json('Error400')
    })
})

//New
router.post('/', (req,res) => {
    booksDB.create(req.body)
    .then((createdBook) => {
        res.status(200).json(`YOU SUCCESSFULLY ADDED ${createdBook}`)
    })
    .catch(err =>{
        res.status(400).json('Error400')
    })
})

//Edit
router.put('/:id', (req,res) => {
    booksDB.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((book) => {
        res.status(200).json(`YOU SUCCESSFULLY UPDATED ${book}`)
    })
    .catch(err =>{
        res.status(404).json('Error400')
    })
})

//Delete
router.delete('/:id', (req,res) => {
    booksDB.findByIdAndDelete(req.params.id)
    .then((book) => {
        res.status(200).json(`YOU SUCCESSFULLY DELETED ${book}`)
    })
    .catch(err =>{
        res.status(404).json('Error400')
    })
})

module.exports = router;