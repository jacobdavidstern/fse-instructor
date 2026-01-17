// routes/authRoutes.js

const bcrypt = require('bcrypt');
const express = require('express');

const jwt = require('jsonwebtoken');
const db = require('../data');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST auth/register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if email or username already exists
  const existingUser = db.users.find(
    (u) => u.email === email || u.username === username
  );

  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 6 characters' });
  }

  if (username.length < 3 || username.length > 20) {
    return res.status(400).json({ error: 'Username must be 3-20 characters' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    id: db.counters.userIdCounter++,
    username,
    email,
    password: hashedPassword,
    role: 'user',
    createdAt: new Date(),
  };

  db.users.push(newUser);

  // Create JWT
  const token = jwt.sign(
    { userId: newUser.id, role: newUser.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(201).json({
    message: 'User registered successfully',
    token,
    user: { id: newUser.id, username, email, role: newUser.role },
  });
});

// POST /login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = db.users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid credentials(b)' });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

// GET /me (protected)
router.get('/me', authenticateToken, (req, res) => {
  const user = db.users.find((u) => u.id === req.user.userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
});

module.exports = router;
