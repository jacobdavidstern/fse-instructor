// server/models/Venue.js

const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema(
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
      maxlength: 150
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    capacity: {
      type: Number,
      min: 1
    }
  },
  { timestamps: true }
);

// Prevent duplicate venues per client
venueSchema.index({ client: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('Venue', venueSchema);
