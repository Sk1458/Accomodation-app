const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema ({
    groupId : Number,
    members : Number,
    gender :  String
});

const Group = mongoose.model('Group', 'groupSchema');

module.exports = Group;

