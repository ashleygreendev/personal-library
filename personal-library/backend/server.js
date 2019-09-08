const mongoose = require('mongoose')
const express = express('express')
const bodyParser = require('body-parser')
var cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

const dbRoute = 'mongodb+srv://agreen:<#####>@cluster0-mhpdt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbRoute, {useNewUrlParser: true})
let database = mongoose.connection;

database.once('open', () => console.log('connected to the database'));
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/getData', (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });