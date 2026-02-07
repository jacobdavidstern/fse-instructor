// Ticket Generation Service function

This is one of those “small” functions that actually defines the integrity of the whole system.

### Responsibility of the ticket-generation service

This function should:

Validate authority (organizer/admin allowed)
Resolve pricing at time of creation
Create immutable ticket documents
“Turn intent + rules into permanent economic facts.”

### Ticket-generation service (clean, MVP-safe)
```js
Pricing map (simple, explicit)
const TICKET_PRICING = {
  CHILD: 1,
  STUDENT: 2,
  ADULT: 4
};

const PLATFORM_FEE = 1;
```
Service function
```js
import Ticket from '../models/Ticket.js';
import Event from '../models/Event.js';

export async function generateTickets({
  eventId,
  customerId,
  ticketType,
  quantity,
  requester
}) {
  // 1. Validate event exists
  const event = await Event.findById(eventId);
  if (!event) {
    throw new Error('Event not found');
  }

  // 2. Authorization
  const isAdmin = requester.role === 'ADMIN';
  const isOrganizer =
    requester.role === 'ORGANIZER' &&
    event.organizerId.toString() === requester._id.toString();

  if (!isAdmin && !isOrganizer) {
    throw new Error('Not authorized to generate tickets for this event');
  }

  // 3. Validate ticket type
  const faceValue = TICKET_PRICING[ticketType];
  if (faceValue == null) {
    throw new Error('Invalid ticket type');
  }

  // 4. Build ticket documents
  const tickets = Array.from({ length: quantity }).map(() => ({
    eventId,
    customerId,
    type: ticketType,
    pricing: {
      faceValue,
      fee: PLATFORM_FEE,
      totalPaid: faceValue + PLATFORM_FEE
    }
  }));

  // 5. Insert tickets
  const createdTickets = await Ticket.insertMany(tickets);

  return createdTickets;
}
```

Optional hardening (only if you want)

If you want one extra “professional touch” without scope creep:
```js
if (quantity <= 0 || quantity > 20) {
  throw new Error('Invalid ticket quantity');
}
```

If someone asked:

“Where does ticket pricing live?”

Your answer is:

“In the ticket-generation service — tickets store the price paid at creation time.”

- Write the controller that calls this
- Show the QR endpoint implementation
- Add indexes to support your aggregations efficiently
