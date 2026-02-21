// server/routeRegistry.js

const registry = [];

function register(method, path, prefix = '') {
  registry.push({ method, path: prefix + path });
  return (req, res, next) => next();
}

module.exports = { registry, register };
