// middleware/security.js

const helmet = require('helmet');

module.exports = helmet({
  // Defaults are great for a JSON API.
  // Add CSP here later if you ever serve HTML.
});
