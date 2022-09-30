const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors')

// app
const app = express()

// import routes
const productRoutes = require('./routes/product');

// database
const connection = require("./db");
connection()

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', productRoutes);

const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})