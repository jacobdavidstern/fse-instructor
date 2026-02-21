// server/middleware/authorizeClientAccess.js

const authorizeClientAccess = (req, res, next) => {
  const { clientId } = req.params;

  // Platform admins bypass tenant restriction
  if (req.user.isPlatformAdmin) {
    return next();
  }

  // All other users must belong to the client
  if (req.user.client.toString() !== clientId) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
};

module.exports = { authorizeClientAccess };
