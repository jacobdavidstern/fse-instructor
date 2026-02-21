// server/models/Department.js

const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
      index: true
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }
  },
  { timestamps: true }
);

// Prevent duplicate departments per client
departmentSchema.index({ client: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('Department', departmentSchema);
