const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../Frontend/public'));

let prom = mongoose.connect('mongodb://localhost:27017/Techfest');
prom.then((info) => {
    console.log("Successfully connected to MongoDB");
});
prom.catch((info) => {
    console.log("Connection to MongoDB Failed!!");
});
const group = require('./models/Group');
const hostel = require('./models/Hostel');

const upload = multer({dest: 'uploads/'});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/accomodation', (req, res) => {
    res.sendFile(__dirname + '../Frontend/Public/index.html');
});


