// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false// prevent accidental exposure
  },
  role: {
    type: String,
    enum: ['staff', 'official', 'owner'],
    default: 'official'
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: function () {
      return !this.isPlatformAdmin;
    }
  },
  isPlatformAdmin: {
    type: Boolean,
    default: false,
    select: false // hide platform admin flag from queries
  }
});

// Global response sanitizer
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
