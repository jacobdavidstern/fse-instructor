// server/utils/exportDB.js
// NOTE: This must be run from server/ to capture .env: node utils/exportDB.js

/* eslint-env node */
require('dotenv').config();

const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const MONGO_URI = process.env.DATABASE_URL;

// IMPORT MODELS
const Client = require('../models/Client');
const Counter = require('../models/Counter');
const Department = require('../models/Department');
const Event = require('../models/Event');
const School = require('../models/School');
const User = require('../models/User');
const Venue = require('../models/Venue');

async function exportCollection(model, name) {
  const docs = await model.find().lean();

  // Strip internal fields
  const cleaned = docs.map(({ _id, __v, ...rest }) => rest);

  const wrapped = { [name]: cleaned };

  const filePath = path.join(__dirname, `export_${name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(wrapped, null, 2));

  console.log(`✓ Exported ${cleaned.length} ${name} → ${filePath}`);
}

(async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);

    await exportCollection(Client, 'clients');
    await exportCollection(Counter, 'counters');
    await exportCollection(Department, 'departments');
    await exportCollection(Event, 'events');
    await exportCollection(School, 'schools');
    await exportCollection(User, 'users');
    await exportCollection(Venue, 'venues');

    console.log('Export complete.');
    process.exit();
  } catch (err) {
    console.error('Export failed:', err);
    process.exit(1);
  }
})();
