const mongoose = require('mongoose')
const schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        id: Number,
        title: String,
        author: String,
    }
)

module.exports = mongoose.model('Book', BookSchema);