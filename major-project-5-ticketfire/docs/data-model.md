TicketFire Data Model (MVP)

You need four models, not more:

User
Event
TicketType (lookup)
Ticket

# 1. User
User
- id (UUID)
- email
- passwordHash
- role (ADMIN | CLIENT | CUSTOMER)
- createdAt

Notes:
One table, one auth system
Role drives authorization
No profiles, no preferences

# 2. Event
Event
  - id (UUID)
  - clientId (User.id)
  - title
  - host
  - date
  - time
  - openBefore
  - capacity
  - venue
  - createdAt

Notes:
Client owns the event

# 3. TicketType (table, flexible)

TicketType
- id
- name
- faceValue

Notes:
Using table (vs enum) for ticket prices provides future dynamic pricing capability

# 4. Ticket
Ticket
- id (UUID)
- eventId (Event.id)
- customerId (User.id)
- type (see above)
- faceValue
- fee = 1
- createdAt

Revenue rules (important)
Per ticket
customerPays = faceValue + fee

Client dashboard shows:
SUM(faceValue)

Admin dashboard shows:
SUM(fee)

Queries you will absolutely need (design check)

If your models support these cleanly, you’re golden:
Client
- All events I own
- Ticket count per event
- Total face value per event

Admin
- All events
- Total tickets sold
- Total fees collected ($1 × ticket count)

Customer (optional)
- My tickets
- Only where event.date >= now
- All of this is straightforward with the above schema.

What follows models
- Auth + role middleware
- Event routes
- Ticket generation route (mock)
- Revenue aggregation queries
- Admin dashboard UI
- Client dashboard UI
- Customer UI (time allowing)

“Tickets are immutable, generated server-side, and used to demonstrate authorization and revenue aggregation — not commerce.”
