require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const ProductController = require('./controllers/ProductController');
const route = require('./routers')
const error = require('res-error')
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECSION_SECRET));
app.use(error);
route(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

