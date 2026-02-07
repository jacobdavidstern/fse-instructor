# Chore 10: Sprint Planning

**Estimated Time:** 30 minutes

## Task
Group user stories into Sprint 1 and Sprint 2

## Steps

- [x] Review all user stories
- [x] Group into Sprint 1 (Backend/Database/Auth):
  - Database models (based on schema design from Planning Chore 10)
  - Authentication routes
  - CRUD API routes
  - Security implementation
- [x] Group into Sprint 2 (Frontend/Integration):
  - React component architecture (based on Planning Chore 7)
  - React pages and routing
  - Authentication UI and state management
  - CRUD operations UI
  - Styling and responsive design (based on Planning Chore 5 & 6)
- [x] Verify Sprint 1: 15-20 hours, Sprint 2: 18-25 hours
- [x] Document sprint backlog

## Acceptance Criteria

- [x] All stories assigned to Sprint 1 or Sprint 2
- [x] Sprint 1 focuses on backend
- [x] Sprint 2 focuses on frontend
- [x] Time estimates are balanced

# Sprint 1 — Backend / Database / Authentication

Focus: Core data models, API functionality, and security foundations.
Prompt: If the frontend did not exist yet, what must be true for the system to be logically complete?

Included Work
Database Models
Models required for MVP:
☐ User
  - id (UUID)
  - email
  - passwordHash
  - role (ADMIN | CLIENT | CUSTOMER)
  - createdAt
☐ Event
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
☐ TicketType
  - id
  - name
  - faceValue
☐ Ticket
  - id (UUID)
  - eventId (Event.id)
  - customerId (User.id)
  - type (CHILD | STUDENT | ADULT)
  - faceValue
  - fee = 1
  - createdAt
Notes on relationships or simplifications:
(e.g., roles simplified, soft deletes, derived stats computed later)


Authentication
Auth features included:
☐ Login
☐ JWT issuance
☐ Protected routes
Authorization scope for MVP:
(e.g., client vs admin only; RBAC deferred)

CRUD API Routes
Resources with full CRUD:
☐ Events
☐ (Optional) Tickets

Routes intentionally deferred:
(e.g., customer ticket access, reports)
Security & Validation
☐ Route protection
☐ Input validation
☐ Ownership checks (basic)

Sprint 1 Time Estimate
Estimated effort: ~15–20 hours
Reasoning:
(e.g., schema and API design are well understood; scope intentionally constrained)

# Sprint 2 — Frontend / Integration

Focus: User-facing workflows, dashboards, and API integration.
Prompt: Now that the backend exists, how do users interact with it?
Included Work
React Architecture

Pages implemented:
☐ Login
☐ Admin Dashboard
☐ Client Dashboard
☐ Client Events List
☐ Client Create Event

Shared layout components:
  - AppLayout
  - Sidebar
  - Header
  - StatGrid
  - StatCard
  - SchoolCard
  - EventsList
  - EventCard
  - EventForm

Input components:
  - LoginForm
  - EventForm

Authentication UI & State
☐ Login form
☐ Auth context
☐ Route guards
Authentication state is global and managed via React Context, while form input state remains local to the LoginForm component.

Redirect behavior:
Redirect behavior:
- Redirect authenticated users away from /login
- Redirect unauthenticated users attempting to access protected routes

CRUD UI
☐ Create event
☐ View events list
☐ Draft vs publish flow (basic, client-side distinction)

Deferred within Sprint 2 (out of current sprint scope):
- Edit/delete UX polish
- Customer ticket access UI
Integration & UX
☐ API integration
☐ Loading states
☐ Error handling
☐ Basic responsive styling

Sprint 2 Time Estimate

Estimated effort: ~18–25 hours
Reasoning:
(e.g., UI integration and iteration add variability)

Sprint Verification
☐ All work assigned to Sprint 1 or Sprint 2
☐ Sprint 1 focuses on backend foundations
☐ Sprint 2 focuses on frontend and integration
☐ Scope reflects MVP priorities

Notes / Intentional Deferrals (Out of MVP Scope)
Prompt: What did I choose not to build yet, and why?
- Customer ticket login/access
- Payment processing (Stripe)
- Advanced RBAC (multiple roles beyond admin/client)
- Ticket scanning and redemption workflows
- Gate / door / ticket office sales workflows
- Reporting and analytics

Gate and ticket office sales workflows were deferred due to their operational complexity and overlap with scanning, hardware, and payment-processing.
