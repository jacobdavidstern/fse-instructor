# Event Schedules and MongoDB entry

- Ticket Types (3, enum lookup)
  - Adult
  - Student
  - Child

- Departments (table based lookup, owned by client)
  - Athletics
  - Music
  - Theatre
  - Activities

- Schools (4 schools, 2 districts/clients, owned by client)
  - Trinity School District
    - Marshall HS
    - Warren HS
  - Summit School District
    - Washington HS
    - Loyola HS

- Venues (4 venues per host school, 16 total, owned by client)
  - Gymnasium (basketball, slug: Gym)
  - Natatorium (swimming)
  - Performing Arts Center (music and theatre, slug: PAC)
  - Auditorium (dances)

- Athletic Events  (3 per host school, note teams not implemented in MVP)
  - Boys and Girls Basketball (2 events per host school)
  - Swimming (1 event per host school)
- Music Events (1 per host school)
- Theatre Events (1 per host school)
- Activities (dances, 1 per host school)

```mermaid
Client
├── Departments
├── Schools
├── Venues
├── Events
└── Users
```

I need to create:

1. Clients (2, which necessarily creates a User, level: Owner)
2. Departments (4 per client, 8 total)
3. Schools (2 per client, 4 total)
4. Venues (4 per school, 16 total)
- Trinity
  (departments)
  - Activities
  - Athletics
  - Music
  - Theatre
  --- (schools)
  - Marshall HS
    (venues)
  	- Marshall Gymnasium (slug: Gym)
	- Marshall Natatorium
	- Marshall Performing Arts Center (slug PAC)
	- Marshall Auditorium
  - Warren HS
    (venues)
  	- Warren Gymnasium (slug: Gym)
	- Warren Natatorium
	- Warren Performing Arts Center (slug PAC)
	- Warren Auditorium
- Summit
  (departments)
  - Activities
  - Athletics
  - Music
  - Theatre
  --- (schools)
  - Washington HS
    (venues)
  	- Washington Gymnasium (slug: Gym)
	- Washington Natatorium
	- Washington Performing Arts Center (slug PAC)
	- Washington Auditorium
  - Loyola HS
    (venues)
  	- Loyola Gymnasium (slug: Gym)
	- Loyola Natatorium
	- Loyola Performing Arts Center (slug PAC)
	- Loyola Auditorium

Then I can seed events.

---

##	Date	School host	Event
Summit School District (client slug: summit)
01. Mar 03  Washington Boys Basketball: Washington Huskies vs Loyola Leopards
02. Mar 04  Loyola Boys Basketball: Loyola Leopards vs Washington Huskies
03. Mar 06  Washington Girls Basketball: Washington Huskies vs Loyola Leopards
04. Mar 07  Loyola Girls Basketball: Loyola Leopards vs Washington Huskies
05. Mar 10  Washington Swimming Dual Meet: Washington vs Loyola
06. Mar 17  Loyola Swimming Dual Meet: Loyola vs Washington
07. Mar 15  Washington Theatre: The Glitch in the System
08. Mar 18  Loyola Theatre: Echoes of the Concrete
09. Mar 20  Washington Music: Washington Lo-Fi & Strings Showcase
10. Mar 22  Loyola Music Loyola Synth-Pop & Percussion Night
11. Mar 28  Washington Dance: Urban Pulse: Street Styles
12. Mar 30  Loyola Dance Velocity: A Digital Horizon Dance

Trinity School District (client slug: trinity)
13.	Mar 03	Marshall	Boys Basketball: Marshall Bees vs Warren Rattlers
14.	Mar 04	Warren	Boys Basketball: Warren Rattlers vs Marshall Bees
15.	Mar 06	Marshall	Girls Basketball: Marshall Bees vs Warren Rattlers
16.	Mar 07	Warren	Girls Basketball: Warren Rattlers vs Marshall Bees
17.	Mar 10	Marshall	Swimming Dual Meet: Marshall vs Warren
18.	Mar 17	Warren	Swimming Dual Meet: Warren vs Marshall
19.	Mar 15	Marshall	Theatre: Saved by the Bell
20.	Mar 18	Warren	Theatre: The Last Light
21. Mar 20	Marshall	Music: Marshall Jazz Collective – Spring Concert
22.	Mar 22	Warren	Music: Warren Modern Ensemble Live Concert
23.	Mar 28	Marshall	Dance: Spring Fling Dance
24. Mar 30	Warren	Dance: Neon Nights Dance

- Events: 24
- Event capacity: 24 per event
- Pre-sold tickets: 12 per event (288 total)

- Venues (4 venues per host school, 16 total)
  - Gymnasium (basketball, e.g. Marshall Gym)
  - Natatorium (swimming, e.g. Warren Natatorium)
  - Performing Arts Center (music and theatre, e.g. Washington PAC)
  - Auditorium (dances, e.g. Loyola Auditorium)
  (Performing Arts Center is long enough to abbreviate PAC, and Gym is common, while Natatorium is unfamiliar, and Auditorium is common)

---

## Departments
(Summit and Trinity)
{
  "departments": [
    { "name": "Athletics", "slug": "athletics" },
    { "name": "Music", "slug": "music" },
    { "name": "Theatre", "slug": "theatre" },
    { "name": "Activities", "slug": "activities" }
  ]
}

## Schools
### Summit
{
  "schools": [
    { "name": "Washington HS", "slug": "washington" },
    { "name": "Loyola HS", "slug": "loyola" }
  ]
}

### Trinity
{
  "schools": [
    { "name": "Marshall HS", "slug": "marshall" },
    { "name": "Warren HS", "slug": "warren" }
  ]
}

## Venues
### Summit
{
  "venues": [
    { "name": "Washington Performing Arts Center", "slug": "washington_pac", "capacity": 100 },
    { "name": "Washington Gymnasium", "slug": "washington_gym", "capacity": 100 },
    { "name": "Washington Auditorium", "slug": "washington_auditorium", "capacity": 100 },
    { "name": "Washington Natatorium", "slug": "washington_pool", "capacity": 100 },
    { "name": "Loyola Performing Arts Center", "slug": "loyola_pac", "capacity": 100 },
    { "name": "Loyola Gymnasium", "slug": "loyola_gym", "capacity": 100 },
    { "name": "Loyola Auditorium", "slug": "loyola_auditorium", "capacity": 100 },
    { "name": "Loyola Natatorium", "slug": "loyola_pool", "capacity": 100 }
  ]
}

### Trinity
{
  "venues": [
    { "name": "Marshall Performing Arts Center", "slug": "marshall_pac", "capacity": 100 },
    { "name": "Marshall Gymnasium", "slug": "marshall_gym", "capacity": 100 },
    { "name": "Marshall Auditorium", "slug": "marshall_auditorium", "capacity": 100 },
    { "name": "Marshall Natatorium", "slug": "marshall_pool", "capacity": 100 },
    { "name": "Warren Performing Arts Center", "slug": "warren_pac", "capacity": 100 },
    { "name": "Warren Gymnasium", "slug": "warren_gym", "capacity": 100 },
    { "name": "Warren Auditorium", "slug": "warren_auditorium", "capacity": 100 },
    { "name": "Warren Natatorium", "slug": "warren_pool", "capacity": 100 }
  ]
}


## Events
### Summit
{
  "events": [
    {
      "event_name": "Boys Basketball: Washington Huskies vs Loyola Leopards",
      "school_slug": "washington",
      "department_slug": "athletics",
      "venue_slug": "washington_gym",
      "start_at": "2026-03-03T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Boys Basketball: Loyola Leopards vs Washington Huskies",
      "school_slug": "loyola",
      "department_slug": "athletics",
      "venue_slug": "loyola_gym",
      "start_at": "2026-03-04T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Girls Basketball: Washington Huskies vs Loyola Leopards",
      "school_slug": "washington",
      "department_slug": "athletics",
      "venue_slug": "washington_gym",
      "start_at": "2026-03-06T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Girls Basketball: Loyola Leopards vs Washington Huskies",
      "school_slug": "loyola",
      "department_slug": "athletics",
      "venue_slug": "loyola_gym",
      "start_at": "2026-03-07T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Swimming Dual Meet: Washington vs Loyola",
      "school_slug": "washington",
      "department_slug": "athletics",
      "venue_slug": "washington_pool",
      "start_at": "2026-03-10T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Swimming Dual Meet: Loyola vs Washington",
      "school_slug": "loyola",
      "department_slug": "athletics",
      "venue_slug": "loyola_pool",
      "start_at": "2026-03-17T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Theatre: The Glitch in the System",
      "school_slug": "washington",
      "department_slug": "theatre",
      "venue_slug": "washington_auditorium",
      "start_at": "2026-03-15T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Theatre: Echoes of the Concrete",
      "school_slug": "loyola",
      "department_slug": "theatre",
      "venue_slug": "loyola_auditorium",
      "start_at": "2026-03-18T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Music: Washington Lo-Fi & Strings Showcase",
      "school_slug": "washington",
      "department_slug": "music",
      "venue_slug": "washington_pac",
      "start_at": "2026-03-20T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Music: Loyola Synth-Pop & Percussion Night",
      "school_slug": "loyola",
      "department_slug": "music",
      "venue_slug": "loyola_pac",
      "start_at": "2026-03-22T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Dance: Urban Pulse: Street Styles",
      "school_slug": "washington",
      "department_slug": "activities",
      "venue_slug": "washington_gym",
      "start_at": "2026-03-28T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
  },
  {
      "event_name": "Dance: Velocity: A Digital Horizon",
      "school_slug": "loyola",
      "department_slug": "activities",
      "venue_slug": "loyola_gym",
      "start_at": "2026-03-30T19:00:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    }
  ]
}

### Trinity
{
  "events": [
    {
      "event_name": "Boys Basketball: Marshall Bees vs Warren Rattlers",
      "school_slug": "marshall",
      "department_slug": "athletics",
      "venue_slug": "marshall_gym",
      "start_at": "2026-03-03T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Boys Basketball: Warren Rattlers vs Marshall Bees",
      "school_slug": "warren",
      "department_slug": "athletics",
      "venue_slug": "warren_gym",
      "start_at": "2026-03-04T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Girls Basketball: Marshall Bees vs Warren Rattlers",
      "school_slug": "marshall",
      "department_slug": "athletics",
      "venue_slug": "marshall_gym",
      "start_at": "2026-03-06T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Girls Basketball: Warren Rattlers vs Marshall Bees",
      "school_slug": "warren",
      "department_slug": "athletics",
      "venue_slug": "warren_gym",
      "start_at": "2026-03-07T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Swimming Dual Meet: Marshall vs Warren",
      "school_slug": "marshall",
      "department_slug": "athletics",
      "venue_slug": "marshall_pool",
      "start_at": "2026-03-10T17:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Swimming Dual Meet: Warren vs Marshall",
      "school_slug": "warren",
      "department_slug": "athletics",
      "venue_slug": "warren_pool",
      "start_at": "2026-03-17T17:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },

    {
      "event_name": "Theatre: Saved by the Bell",
      "school_slug": "marshall",
      "department_slug": "theatre",
      "venue_slug": "marshall_pac",
      "start_at": "2026-03-15T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Theatre: The Last Light",
      "school_slug": "warren",
      "department_slug": "theatre",
      "venue_slug": "warren_pac",
      "start_at": "2026-03-18T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },

    {
      "event_name": "Music: Marshall Jazz Collective – Spring Concert",
      "school_slug": "marshall",
      "department_slug": "music",
      "venue_slug": "marshall_pac",
      "start_at": "2026-03-20T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Music: Warren Modern Ensemble Live Concert",
      "school_slug": "warren",
      "department_slug": "music",
      "venue_slug": "warren_pac",
      "start_at": "2026-03-22T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },

    {
      "event_name": "Dance: Spring Fling Dance",
      "school_slug": "marshall",
      "department_slug": "activities",
      "venue_slug": "marshall_auditorium",
      "start_at": "2026-03-28T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    },
    {
      "event_name": "Dance: Neon Nights Dance",
      "school_slug": "warren",
      "department_slug": "activities",
      "venue_slug": "warren_auditorium",
      "start_at": "2026-03-30T19:00:00-07:00",
      "doors_open_before": 30,
      "total_tickets": 24,
      "published": true
    }
  ]
}
