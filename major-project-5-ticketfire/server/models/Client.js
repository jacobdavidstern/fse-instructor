// server/models/Client.js

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientSlug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[a-z0-9-]+$/,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  clientNumber: {
    type: Number,
    required: true,
    unique: true
  },
  eventCounter: {
  type: Number,
  default: 0
  }
});


module.exports = mongoose.model('Client', clientSchema);
