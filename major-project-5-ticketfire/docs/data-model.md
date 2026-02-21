TicketFire Data Model Specification (MVP)

This document defines the data structures, lookup collections, seeded data, and validation rules for the TicketFire backend. It reflects the current project scope: admin and client dashboards only, with pre-seeded events, and no public ticketing flow.

1. Domain Overview
TicketFire manages school‑hosted events across multiple districts.
The system supports:

- Multi-tenant districts (clients)
- Schools within each district
- Venues owned by schools
- Teams representing school sports programs
- Events hosted by schools
- Optional ticket counts for dashboard metrics
- Admin and client authentication
- There is no public ticketing UI in the MVP (currently, optional)

2. Lookup Collections (Static, Seeded Once)
2.1 department_type
Represents the academic department hosting the event.
```json
{
  '_id': 'MUSIC',
  'label': 'Music'
}
```
Examples:

- ATHLETICS
- MUSIC
- THEATRE
- ACTIVITIES
- Future additions (e.g., ESPORTS) fit naturally.

2.2 ticket_type
Note: These behave like enums but are stored as a lookup for consistency.
```json
{
  '_id': 'STUDENT',
  'label': 'Student'
}
```

Values:
- CHILD
- STUDENT
- ADULT
- Used only for seeded ticket metrics.

3. Core Collections

3.1 clients (school districts)

- TicketFire is geared toward school districts
- For MVP, all clients are assumed schools or school districts with schools
- Future post-MVP clients may consist of theatres, festivals, tournaments, fairs, or associations

```json
{
  '_id': '<mongo-object-id>',
  'slug': 'trinity',
  'name': 'Trinity SD',
  'created_at': '2026-02-01T00:00:00Z'
}
```

3.2 departments

```json
{
  '_id': '<mongo-object-id>',
  'name': 'Physical Education',
  'slug': 'athletics'
}
```

3.3 schools

```json
{
  '_id': '<mongo-object-id>',
  'client_id': 'trinity',
  'name': 'Marshall HS',
  'slug': 'marshall_hs',
  'created_at': '2026-02-01T00:00:00Z'
}
```

3.4 venues

```json
{
  '_id': '<mongo-object-id>',
  'schoolSlug': 'marshall_hs',
  'name': 'Marshall Gym',
  'capacity': 500,
  'created_at': '2026-02-01T00:00:00Z'
}
```

Examples:

- marshall_gym → “Marshall Gym”
- warren_pac → “Warren PAC”
- marshall_natatorium → “Marshall Natatorium”
- This keeps the model flexible and realistic.

3.5 events
Events reference event names, schools, departments, venues, times, and tickets.

```json
{
  '_id': 'ObjectId',                   // SYSTEM-MANAGED
  'event_name': 'Spring Concert',      // REQUIRED, mutable
  'schoolSlug': 'marshall_hs',         // REQUIRED (accounting anchor)
  'department_id': 'MUSIC',            // REQUIRED (accounting anchor)
  'venue_id': 'marshall_pac',          // REQUIRED, mutable
  'start_at': '2026-03-15T19:00:00Z',  // REQUIRED, mutable
  'doors_open_before': 30,             // OPTIONAL, mutable
  'total_tickets': 32,                 // REQUIRED, mutable
  'tickets_sold': 16,                  // SYSTEM-MANAGED
  'published': true,                   // BOOLEAN, mutable (on/off sale)
  'created_at': '2026-02-01T00:00:00Z' // SYSTEM-MANAGED
}

```

Event Rules
- doors_open_before must be a multiple of 5 min up to 90
- tickets_sold <= total_tickets
- department_id must reference a valid department
- venue_id must reference a valid venue
- Events are immutable after creation except for allowed fields

3.6 tickets
Tickets exist only for dashboard metrics.
No public purchase or validation.

```json
{
  '_id': 'ObjectId',
  'event_id': 'ObjectId',
  'ticket_type_id': 'STUDENT',
  'token': 'uuid-or-hash',
  'email': null,                      // optional
  'phone': null,                      // optional (E.164 format)
  'issued_at': '2026-03-10T12:00:00Z'
}
```

Rules:

- PII-minimal
- No redemption fields
- token - opaque, system‑generated identifier used only for internal ticket tracking. Not a JWT. Not a credential.
- Seeded to simulate real-world activity

3.7 admins

```json
{
  '_id': 'ObjectId',
  'email': 'admin@school.edu',
  'password_hash': 'bcrypt...',
  'created_at': '2026-02-01T00:00:00Z'
}
```

- Admins have full system access and manage client events by logging into client box offices

4. Post-MVP: Season tickets, and sport passes are very popular regionally

MVP Event Schema by design has no sport field
To facilitate season tickets, season passes, and sport passes
- add sport to pass events
- create new pass for all events of one or more sports (expires at end of school year if not before, $3 fee)
- create new season tickets for selection of tickets ($3 fee)

5.1 Appendix A — Authentication & Security Model

- Ticket tokens are opaque, single-purpose identifiers

JWT usage rules

- short-lived
- admin-only
- never embedded in URLs
- never used for consumers

5.1 Appendix B - Architecture Rationale

Stateless REST design keeps the backend simple and scalable.

Why MongoDB / Atlas for this project

- Matches curriculum
- Flexible schema for MVP
- Easy seeding of baked-in data
- No joins required
- Clean REST modeling
