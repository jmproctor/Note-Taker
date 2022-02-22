const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// routes

const apiRoute = path.join(__dirname, '/db');
const htmlRoute = path.join(__dirname, '/public');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}!`);
});