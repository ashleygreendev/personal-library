const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        id: Number,
        title: String,
        author: String,
    }
)

module.exports = mongoose.model('Book', BookSchema);