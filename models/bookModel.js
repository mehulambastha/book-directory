const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Book", bookSchema)