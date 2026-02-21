// server/controllers/authController.js

const Client = require('../models/Client');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Counter = require('../models/Counter');

const registerClient = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { clientSlug, name, email, password } = req.body;

    // Use a MongoDB session to atomically create the Client and its Owner user.
    // This prevents partial writes (e.g., a Client without an Owner) if one step fails.
    // Requires a replica set, which Atlas supports, although local MongoDB may not.
    const existingUser = await User.findOne({ email }).session(session);
    if (existingUser) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Increment Client number atomically
    const counter = await Counter.findOneAndUpdate(
      { name: 'clientNumber' },
      { $inc: { value: 1 } },
      { new: true, upsert: true, session }
    );

    const clientNumber = counter.value;

    // Create client with auto clientNumber
    const [client] = await Client.create(
      [{
        clientSlug,
        name: clientSlug,
        clientNumber
      }],
      { session }
    );

    // Create owner user
    await User.create(
      [{
        name,
        email,
        password: hashedPassword,
        role: 'owner',
        client: client._id
      }],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      message: 'Client registered',
      clientId: client._id
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error('REGISTER CLIENT ERROR:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

const registerUser = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { name, email, password, role } = req.body;

    // Validate role
    if (!['staff', 'official'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    // Validate client exists
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Ensure email not taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      client: client._id
    });

    res.status(201).json({ message: 'User created' });

  } catch (error) {
    console.error('REGISTER USER ERROR:', error);
    res.status(500).json({ message: 'User creation failed' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password +isPlatformAdmin');
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        client: user.client,
        isPlatformAdmin: user.isPlatformAdmin
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token });
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    res.status(500).json({
      message: 'Login failed',
      ...(process.env.NODE_ENV === 'development' && {
        error: error.message
      })
    });
  }
};

module.exports = { registerClient, registerUser, login };
