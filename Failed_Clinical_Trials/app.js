const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const vm = require("v-response");
require('dotenv').config();

const articles = require('./routes/articlesRoute.js');
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    app.listen(PORT, vm.log("listing on port", PORT));
    console.log('Connected to MongoDB', process.env.MONGODB_URI);
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express(); 

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});


app.use('/', articles);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
