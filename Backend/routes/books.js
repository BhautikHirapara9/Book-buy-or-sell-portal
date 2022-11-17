const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Book = require('../models/Book');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Books using: GET "/api/Books/getuser". Login required
router.get('/fetchallbooks', fetchuser, async (req, res) => {
    try {
        const books = await Book.find({ user: req.user.id });
        res.json(books)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/allthebook', fetchuser, async (req, res) => {
    try {
        const books = await Book.find({})
        res.json(books)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Book using: POST "/api/Books/addBook". Login required
router.post('/addbook', fetchuser, async (req, res) => {
        try {
            const {name, author, edition, publisher, category, priceonbook, sellprice} = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const book = new Book({
                name, author, edition, publisher, category, priceonbook, sellprice, user: req.user.id
            })
            const savedBook = await book.save()

            res.json(savedBook)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Book using: PUT "/api/Books/updateBook". Login required
router.put('/updatebook/:id', fetchuser, async (req, res) => {
    const { name, author, edition, publisher, category, priceonbook, sellprice } = req.body;
    try {
        // Create a newBook object
        const newBook = {};
        if(name) { newBook.name = name};
        if(author) { newBook.author = author};
        if(edition) { newBook.edition = edition};
        if(publisher) { newBook.publisher = publisher};
        if(category) { newBook.category = category};
        if(priceonbook) { newBook.priceonbook = priceonbook};
        if(sellprice) { newBook.sellprice = sellprice};

        // Find the Book to be updated and update it
        let book = await Book.findById(req.params.id);
        if (!book) { return res.status(404).send("Not Found") }

        if (book.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        book = await Book.findByIdAndUpdate(req.params.id, { $set: newBook }, { new: true })
        res.json({ book });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing book using: DELETE "/api/books/deletebook". Login required
router.delete('/deletebook/:id', fetchuser, async (req, res) => {
    try {
        // Find the book to be delete and delete it
        let book = await Book.findById(req.params.id);
        if (!book) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this book
        if (book.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        book = await Book.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Book has been deleted", book: book });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router