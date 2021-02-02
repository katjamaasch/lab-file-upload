// models/User.model.js
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  content: {
    type: String
  },
  creatorId: {
    type: mongoose.Types.ObjectId
    // ref: 'User'
  },
  picPath: {
    type: String
    //where the picture is stored
  },
  picName: {
    type: String
  }
});

module.exports = model('Post', postSchema);
