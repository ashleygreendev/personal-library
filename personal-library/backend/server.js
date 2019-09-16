const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./book');
var cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

const dbRoute = 'mongodb+srv://agreen:<326849Ag!>@cluster0-mhpdt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbRoute, {useNewUrlParser: true})
let database = mongoose.connection;

database.once('open', () => console.log('connected to the database'));
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/getBook', (req, res) => {
    Book.find((err, book) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, book: book });
    });
  });

router.post('/putBook', (req, res) => {
    let book = new Book();
    const {id, title, author} = req.body();

    // add data validation here

    book.id = id;
    book.title = title;
    book.author = author;
});

app.use('/api', router);
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));