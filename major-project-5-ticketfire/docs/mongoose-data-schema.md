// Mongoose data schema

Revenue is derived from what each customer actually paid per ticket, not from current pricing.

That means:

Pricing rules may change
Ticket revenue is always accurate

Final Ticket Economics (locked)

Instead of just faceValue + fee, make it explicit:
```json
pricing: {
  faceValue,        // what organizer earns
  fee,              // what TicketFire earns
  totalPaid         // faceValue + fee (redundant but explicit)
}
```

Final MongoDB / Mongoose Schemas

User Schema
```json
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ['ADMIN', 'ORGANIZER', 'CUSTOMER'],
    required: true
  }
}, { timestamps: true });
```

Event Schema
```json
const EventSchema = new mongoose.Schema({
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String }
}, { timestamps: true });
```
Ticket Schema
```json
const TicketSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['CHILD', 'STUDENT', 'ADULT'],
    required: true
  },
  pricing: {
    faceValue: { type: Number, required: true },
    fee: { type: Number, required: true },
    totalPaid: { type: Number, required: true }
  }
}, { timestamps: true });
```

Revenue calculations (derived, not stored)

Admin dashboard
```json
SUM(pricing.fee)
```

Client dashboard
```json
SUM(pricing.faceValue) grouped by event
```

Customer dashboard Optional:
```json
SUM(pricing.totalPaid) for gross
```

- Draft the ticket-generation service function

# An event must know which school and department owns the ticket revenue

- Some events are district‑wide
- Some districts have shared venues
- Some clients (state associations) have no “school” at all

The minimal, correct fix
Add these fields to your Event or Ticket documents:

Option A: Store on the Event (recommended)
```json
event: {
  schoolId: "marshall",
  departmentId: "athletics"
}
```
