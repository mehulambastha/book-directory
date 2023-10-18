const Book = require("../models/bookModel")
const asyncHandler = require("express-async-handler")

const addBook = asyncHandler(async (req, res) => {
    const {name, author, year} = req.body

    if (!name || !author) {
        console.log('Error: Give complete data')
        res.status(400).json({Error: "Dont Give empty data"})
    }

    const newBook = new Book({name , author, year})
    await newBook.save()

    console.log(`Data saved.\n${name , author, year}`)
    
    res.status(201).json(newBook)
})

const viewBook = asyncHandler(async (req, res) => {
    const books = await Book.find()

    console.log(`All books saved are : \n ${books}`)
    res.status(200).json({books})
})

const deleteBook = asyncHandler(async(req, res) => {
    const id = req.params.id

    try{
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json({Success: "Book deleted.", Deleted: book})
        console.log(`Deletion successful`)
    }catch(err){
        res.status(400).json(err)
        console.log(err)
    }
})

const updateBook = asyncHandler(async(req, res) => {
    const id = req.params.id

    const {name, author, year} = req.body

    try{
        const book = await Book.findByIdAndUpdate(id, {name, author, year})
        res.status(201).json({Success: "Book Updated"})
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = {addBook, deleteBook, viewBook, updateBook}