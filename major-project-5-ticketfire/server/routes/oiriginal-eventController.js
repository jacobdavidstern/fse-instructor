// server/controllers/eventController.js

const mongoose = require('mongoose');

const Client = require('../models/Client');
const Event = require('../models/Event');
const School = require('../models/School');
const Department = require('../models/Department');
const Venue = require('../models/Venue');

const createEvent = async (req, res) => {
  const { clientId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res.status(400).json({ message: 'Invalid client id' });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      event_name,
      school_slug,
      department_slug,
      venue_slug,
      start_at,
      doors_open_before,
      total_tickets,
      published
    } = req.body;

  // DEBUG
  console.log("REQ BODY:", req.body);
  console.log("school_slug:", school_slug);

    // Resolve school by slug
    const schoolDoc = await School.findOne({
      slug: school_slug,
      client: clientId
    }).session(session);

    if (!schoolDoc) throw new Error('Invalid school');

    // Resolve department by slug
    const departmentDoc = await Department.findOne({
      slug: department_slug,
      client: clientId
    }).session(session);

    if (!departmentDoc) throw new Error('Invalid department');

    // Resolve venue by slug
    const venueDoc = await Venue.findOne({
      slug: venue_slug,
      client: clientId
    }).session(session);

    if (!venueDoc) throw new Error('Invalid venue');

    // Increment eventCounter atomically
    const client = await Client.findByIdAndUpdate(
      clientId,
      { $inc: { eventCounter: 1 } },
      { new: true, session }
    );

    if (!client) throw new Error('Client not found');

    // Create event
    const [event] = await Event.create(
      [{
        client: clientId,
        eventId: client.eventCounter,
        event_name,
        school: schoolDoc._id,
        department: departmentDoc._id,
        venue: venueDoc._id,
        start_at,
        doors_open_before,
        total_tickets,
        published
      }],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ eventId: event.eventId });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error('CREATE EVENT ERROR:', error);
    res.status(400).json({ message: error.message || 'Event creation failed' });
  }
};

const getEvent = async (req, res) => {
  try {
    const { clientId, eventId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ message: 'Invalid client id' });
    }

    const event = await Event.findOne({
      client: clientId,
      eventId: Number(eventId)
    })
      .populate('school', 'name')
      .populate('department', 'name')
      .populate('venue', 'name')
      .select(
        'eventId event_name school department venue start_at doors_open_before total_tickets tickets_sold published created_at -_id'
      )
      .lean();

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('GET EVENT ERROR:', error);
    res.status(500).json({ message: 'Failed to fetch event' });
  }
};

const getEvents = async (req, res) => {
  try {
    const { clientId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ message: 'Invalid client id' });
    }

    const events = await Event.find({
      client: clientId,
      published: true
    })
      .sort({ eventId: -1 })
      .populate('school', 'name')
      .populate('department', 'name')
      .populate('venue', 'name')
      .select(
        'eventId event_name school department venue start_at doors_open_before total_tickets tickets_sold published created_at -_id'
      )
      .lean();

    res.json(events);
  } catch (error) {
    console.error('GET EVENTS ERROR:', error);
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

// EXPORTS (must be at the bottom to avoid TDZ errors)
module.exports = { createEvent, getEvent, getEvents };
