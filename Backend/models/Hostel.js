const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostelSchema = new Schema ({
    hostelName : String,
    roomNumber : Number,
    capacity : Number,
    sex : String
});

const Hostel = mongoose.model('Hostel', 'hostelSchema');

module.exports = Hostel;