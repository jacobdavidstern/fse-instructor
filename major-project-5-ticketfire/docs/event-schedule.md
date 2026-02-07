Final Project Planning document with following information
One thing I saw Friday that I need to integrate into my final project is shown on the grading rubric, namely both front and back ends. My current final project concept is backend focused.

The instructor apparently prefers thin and simple frontends, which fits with my current MVP style. Since I'm already essentially mocking my former employer's backend, seems like the best frontend concept would be to mock their frontend. Since I excluded season tickets/passes, and ticket transfers, endpoints are pretty simple

1. user profile
  - I'm not sure what this needs

2. event search
  - this would provide filters for sport or event type, date (not geo since only 1 school)

3. ticket wallet
  - list of purchased tickets for upcoming events
  - tickets for past events will be moved to profile > orders
  - tickets for upcoming events can be displayed in a list and when selected displayed on a card as follows

Ticket Card
- Header (navy background, light text, center aligned)
  - Event logo (fontawesome sports outline figures)
  - Event title (A vs B)
  - Ticket type (Student, Adult, Child)

- Ticket Body (light background, dark text, center aligned)
  - Event date and time (left-aligned)
  - Event venue (right aligned)
  - Ticket ID (random 12 digit, ideally with QR code--could be mocked, or barcode)
  - Doors open x min early (hide if zero)

- Event types
  - Athletics
  - Music
  - Theatre
  - Activities

- Ticket Types (3)
  - Adult
  - Student
  - Child

- Schools
  - Marshall HS
  - Warren HS

- Sports (6)
  - Basketball (4)
  - Swimming (2)
- Music (2)
- Theatre (2)
- Activities (2)

- Venues (4)
  - Gymnasium (basketball)
  - Natatorium (swimming)
  - Performing Arts Center (music and theatre)
  - Auditorium (dances)

#	Date	School (Host)	Event
01.	Mar 03	Marshall	Boys Basketball: Marshall Bees vs Warren Rattlers
02.	Mar 04	Warren	Boys Basketball: Warren Rattlers vs Marshall Bees
03.	Mar 06	Marshall	Girls Basketball: Marshall Bees vs Warren Rattlers
04.	Mar 07	Warren	Girls Basketball: Warren Rattlers vs Marshall Bees
05.	Mar 10	Marshall	Swimming Dual Meet: Marshall vs Warren
06.	Mar 17	Warren	Swimming Dual Meet: Warren vs Marshall
07.	Mar 15	Marshall	Theatre: Saved by the Bell
08.	Mar 18	Warren	Theatre: The Last Light
09. Mar 20	Marshall	Music: Marshall Jazz Collective – Spring Concert
10.	Mar 22	Warren	Music: Warren Modern Ensemble – Live Concert
11.	Mar 28	Marshall	Dance: Spring Fling Dance
12.  Apr 01	Warren	Dance: Neon Nights Dance

- Events: 12
- Event capacity: 24 per event
- Pre-sold tickets: 12 per event (144 total)

---

### Final Project Planning - module 117

```json
{
  "_id": "ObjectId",
  "eventName": "Spring Concert",
  "eventType": "Music",
  "facility": "Theatre",
  "startTime": "2026-03-15T19:00:00Z",
  "durationMinutes": 90,
  "doorsOpenMinutesBefore": 30,
  "zipCode": "12345",
  "ticketType":"Student",
}
```

#### Scope is as follows:

- Backend-focused API
- Events are pre-seeded (“baked in”)
- Fixed capacities and ticket counts
- Stateless ticket issuance & validation
- No event edits after creation
- No cancellations, refunds, notifications, or capacity changes
- Authentication for admins only (event creators)
- Consumers are anonymous ticket holders (wallet = optional stretch, not core)

### LOOKUP TABLES (Yes, but Mongo-style)

Even in MongoDB, we’ll use lookup collections instead of enums so you can demonstrate relational thinking without SQL.

#### Lookup Collections (Static, Seeded Once)

```json
event_types
{
  "_id": "MUSIC",
  "label": "Music"
}
ticket_types
{
  "_id": "STUDENT",
  "label": "Student"
}
facility_types
{
  "_id": "THEATRE",
  "label": "Theatre"
}
```

Why this is good:

- Mirrors relational lookup tables
- Instructor-approved modeling
- Easy to reference
- No joins required for MVP
- Easy to migrate to SQL later

### CORE COLLECTIONS (MongoDB / Atlas)

events (Baked In)

```json
{
  "_id": ObjectId,
  "title": "Spring Choir Concert",
  "event_type_id": "MUSIC",
  "facility_type_id": "THEATRE",
"start_at": "2026-03-15T19:00:00Z",
  "doors_open_at": "2026-03-15T18:30:00Z",
"total_tickets": 16,
  "tickets_sold": 0,
"created_at": "2026-02-01T00:00:00Z"
}
```

Rules (enforced in code):

- Immutable after creation
- doors_open_at < start_at
- tickets_sold <= total_tickets

tickets

```json
{
  "_id": ObjectId,
  "event_id": ObjectId,
  "ticket_type_id": "STUDENT",
"token": "uuid-or-hash",
  "issued_at": "2026-03-10T12:00:00Z",
  "used_at": null
}
```

Rules:

- token is unique
- used_at is null until scanned
- One-time use only
- No user PII stored

admins (Minimal Auth)

```json
{
  "_id": ObjectId,
  "email": "admin@school.edu",
  "password_hash": "bcrypt...",
  "created_at": "2026-02-01T00:00:00Z"
}
```

JWT:

- Short-lived (e.g., 120 min)
- Admin-only
- Never embedded in URLs
- Never reused for public access

### SECURITY MODEL (Instructor-Friendly)

- JWT only for admin endpoints
- Ticket tokens are opaque, single-purpose identifiers
- No JWTs sent to consumers
- No credentialed links (this directly avoids your former-company failure)

```sh
Ticket validation flow:
POST /tickets/validate
→ token
→ mark used
→ return success/failure
```

Stateless. Clean. Safe.

#### WHY THIS IS THE RIGHT STACK CHOICE

Why MongoDB / Atlas (for this project)

- Matches curriculum
- Flexible schema for MVP
- Easy seeding of baked-in data
- No joins required
- Clean REST modeling
- You already “think relational” — this shows you can abstract

---

🐝 Marshall High School (Bees)
Events Hosted by Marshall
Category	Event Name	Opponent / Details
1. Basketball – Boys	Marshall Bees vs. Warren Rattlers	Home
2. Basketball – Girls	Marshall Bees vs. Warren Rattlers	Home
3. Swimming	Marshall vs. Warren Dual Meet	Home
4. Theatre	Saved by the Bell	Marshall Performing Arts
5. Music	Marshall Jazz Collective – Spring Concert	Modern jazz program
6. Dance	Spring Fling Dance	Student event

🐍 Warren High School (Rattlers)
Events Hosted by Warren
Category	Event Name	Opponent / Details
7. Basketball – Boys	Warren Rattlers vs. Marshall Bees	Home
8. Basketball – Girls	Warren Rattlers vs. Marshall Bees	Home
9. Swimming	Warren vs. Marshall Dual Meet	Home
10. Theatre	The Last Light	Original or modern drama
11. Music	Warren Modern Ensemble – Live Concert	Contemporary concert
12. Dance	Neon Nights Dance	Student event

📅 Combined Demo Schedule (Chronological Example)
Sngle “Events” list for the admin view.

#	Date	School (Host)	Event
01.	Mar 03	Marshall	Boys Basketball: Marshall Bees vs Warren Rattlers
02.	Mar 04	Warren	Boys Basketball: Warren Rattlers vs Marshall Bees
03.	Mar 06	Marshall	Girls Basketball: Marshall Bees vs Warren Rattlers
04.	Mar 07	Warren	Girls Basketball: Warren Rattlers vs Marshall Bees
05.	Mar 10	Marshall	Swimming Dual Meet: Marshall vs Warren
06.	Mar 17	Warren	Swimming Dual Meet: Warren vs Marshall
07.	Mar 15	Marshall	Theatre: Saved by the Bell
08.	Mar 18	Warren	Theatre: The Last Light
09. Mar 20	Marshall	Music: Marshall Jazz Collective – Spring Concert
10.	Mar 22	Warren	Music: Warren Modern Ensemble – Live Concert
11.	Mar 28	Marshall	Dance: Spring Fling Dance
12.  Apr 01	Warren	Dance: Neon Nights Dance

- Events: 12
- Event capacity: 24 per event
- Pre-sold tickets: 12 per event (144 total)
