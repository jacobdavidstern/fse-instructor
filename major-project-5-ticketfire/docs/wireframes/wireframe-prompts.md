🧩 Three user groups

- Internal (admins / TicketFire)
- Clients (event organizers / schools)
- Customers (ticket buyers / fans)

# GLOBAL BRANDING NOTES (applied across all prompts)
You can paste this at the top of every prompt or keep it in your clipboard:

Branding constraints:

- Include a TicketFire 🔥 mark in the top-right corner of every screen.
- Include the school logo (an outline bee or honeycomb icon) on all client-facing screens and on the ticket.
- Use a clean light theme, responsive web layout, plain CSS or Bootstrap styling.
- Keep spacing, typography, and hierarchy consistent across all screens.

## INTERNAL (ADMIN) WIREFRAMES

1. Admin and Client Login

```
Generate a clean login screen for a responsive web app using plain CSS or Bootstrap. This is the authentication entry point for both internal admins and client users in an MVP ticketing platform for schools as clients.

Content:
- Centered login card with the following fields:
  - Client ID
  - Username
  - Password
- Primary button: “Sign In”
- Link: “Forgot Password?”
- Minimal footer text: “TicketFire — Secure Access”
- Clean light theme with generous whitespace
- No decorative illustrations; keep the layout simple and security‑focused

Branding:
- TicketFire 🔥 mark in top-right corner *of login card* (not screen)
```

2. Admin Dashboard (default view)

```
Generate a responsive admin dashboard screen in a light theme using plain CSS or Bootstrap. This is an MVP ticketing platform for schools as clients.

Content:
- Central Header with “Admin Dashboard”
- Summary series cards:
  - Clients
  - Monthly Ticket Sales
  - Active Events
  - Draft Events
  - Monthly Revenue
  - Annual Revenue

- Left sidebar navigation:
  - Dashboard (highlighted)
  - Events
  - Clients
  - Settings

Branding:
- TicketFire 🔥 mark in top-right corner
```

3. Admin Events View

```
Generate a responsive client management screen for internal admins using plain CSS or Bootstrap. This is an MVP ticketing platform for schools as clients.

Content:
- Header with “All Events”
- Table of events with columns:
  Event Name, Client/School, Status (Active, Sold Out), Ticket Sales, Event Date

- Left sidebar navigation:
  - Dashboard
  - Events (highlighted)
  - Clients
  - Settings

Branding:
- TicketFire 🔥 mark in top-right corner
```

## CLIENT (EVENT ORGANIZER) WIREFRAMES

1. Client Dashboard (default view)

```
Generate the Client Dashboard screen in a responsive web app. This is an MVP Ticketing Platform for schools as clients. (Use same header and sidebar, except highlight Dashboard)

- Left sidebar navigation:
  - Replace Avatar from Admin sidebar with a bee or honeycomb outline/pattern icon
  - Replace 'Admin User' with 'Official'
  - Replace 'Administration' with 'Athletics Office'
  - Dashboard (highlighted)
  - Events
  - Contacts
  - Settings

- Content:

- First row: four district summary cards
  - Monthly Ticket Revenue
  - Annual Ticket Revenue
  - Monthly Events
  - Monthly Tickets

- Second row: two school revenue cards for Marshall High School and Warren High School
  - Each school card shows:
    - Total Revenue (primary metric)
    - Department breakdown list: Athletics, Theatre, Music, Activities
    - Clean, simple list formatting with consistent spacing

Branding:
- TicketFire 🔥 mark in top-right
```

2. Client Empty State

```
Generate an empty-state screen for a client with no events. This is an MVP ticketing platform for schools as clients, and shows an empty school event events list.

- Left sidebar navigation:
  - Replace Avatar from Admin sidebar with a bee or honeycomb outline/pattern icon
  - Replace 'Admin User' with 'Official'
  - Replace 'Administration' with 'Athletics Office'
  - Dashboard
  - Events (highlighted)
  - Contacts
  - Settings

Content:
- School logo (an outline bee or honeycomb icon) in header
- Title: “You haven’t created any events yet”
- Subtext: “Start by creating your first event.”
- Button: “Create Event”
- Simple, subtle empty-state illustration

Branding:
- TicketFire 🔥 mark in top-right
```
3. Create Event Form

```
Generate a responsive “Create Event” form screen. This is an MVP ticketing platform for schools as clients, and shows a school event creation form.

Content:
- School logo (an outline bee or honeycomb icon) in header
- Form fields: Event Name, Description, Date, Time, Venue, Capacity
- Venue will be a drop-down of 4 location names:
  - Gymnasium
  - Performing Arts Center
  - Natatorium
  - Auditorium
- Dropdown for quarter-hour increments doors/gates open before event
- Button: “Publish Event”
- Light theme, Bootstrap-like spacing

- Left sidebar navigation:
  - Replace Avatar from Admin sidebar with a bee or honeycomb outline/pattern icon
  - Replace 'Admin User' with 'Official'
  - Replace 'Administration' with 'Athletics Office'
  - Dashboard
  - Events (highlighted)
  - Contacts
  - Settings

Branding:
- TicketFire 🔥 mark in top-right
```

4. Client Events (populated)

```
Generate a responsive client dashboard in a light theme. This is an MVP ticketing platform for schools as clients, and this lists school events.

Content:
- Header with school Name and logo (a bee or honeycomb outline/pattern icon)
- Section: “Marshall High School Events”
- Cards or table showing event name, date, sales, status (Active or Sold Out)
- Quick actions: Create Event, View Reports

- Left sidebar navigation:
  - Replace Avatar from Admin sidebar with a bee or honeycomb outline/pattern icon
  - Replace 'Admin User' with 'Official'
  - Replace 'Administration' with 'Athletics Office'
  - Dashboard
  - Events (highlighted)
  - Contacts
  - Settings

Branding:
- TicketFire 🔥 mark in top-right
```

## CUSTOMER (TICKET BUYER) WIREFRAMES ***OPTIONAL***

1. Event Listing

```
Generate a responsive event listing screen for ticket buyers. This is an MVP ticketing platform for schools as clients.

Content:
- Search bar
- List of events with title, date, venue, and “View Details” button
- Light theme, mobile-friendly layout

Branding:
- TicketFire 🔥 mark in top-right
```

2. Event Detail + Ticket Purchase

```
Generate a responsive event detail screen for ticket buyers. This is an MVP ticketing platform for schools as clients.

Content:
- Event title, date, venue
- Ticket tiers with pricing
- Button: “Buy Ticket”
- Light theme, clean layout

Branding:
- TicketFire 🔥 mark in top-right
```

3. Ticket Screen (with QR Code + school logo)

```
Generate a responsive digital ticket screen. This is an MVP ticketing platform for schools as clients.

Content:
- Large QR Code centered
- Event title, date, venue
- Ticket tier and seat info (if applicable)
- School logo (an outline bee or honeycomb icon) near the top
- TicketFire 🔥 mark in top-right
- Clean, minimal layout suitable for mobile display

Branding:
- School logo (an outline bee or honeycomb icon)
- TicketFire 🔥 mark
```
