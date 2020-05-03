const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const vm = require("v-response");
require('dotenv').config();

const articles = require('./routes/articlesRoute.js');

const MONGODB_URI = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    app.listen(PORT, vm.log("listing on port", PORT));
    console.log('Connected to MongoDB', MONGODB_URI);
    mongoose.connection.db.collection('articles', function(err, docs) {
        // Check for error
        if(err) return console.log(err);
        // Walk through the cursor
        docs.find().each(function(err, doc) {
            // Check for error
            if(err) return console.err(err);
            // Log document
            console.log(doc);
        })
    });
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
