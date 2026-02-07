# _start-here

## 1. Setup Your Project Planning Tool

Choose ONE of the following options to track your Sprint 0 work:

**Option A: Trello (Recommended for beginners)**

- Create a free Trello account at https://trello.com
- **Clone the Sprint 0 template:**
  - Go to the [Trello Template](https://trello.com/invite/b/690f96f99012bcaba09b4c28/ATTI95f6baceedd1f6310f955ea03fcf9dd14D9F3903/final-project)
  - Go to top of screen and click "Create Board from Template"
  - Name your board "Final Project - Sprint 0"
- **IMPORTANT:** The template references two files located on OneDrive for this week:
  - User Stories Template: `user-stories-template.md`
  - Project Idea Discovery: `project-idea-and-user-discovery.md`

- **IMPORTANT:** Organize into two lists: "Pre-Sprint 0: Planning Chores" and "Sprint 0: Technical Setup Chores"

## 2. Reference the Step-by-Step Guides

For Setup Chores (SC1-SC4), use the detailed step-by-step guides for better guidance:

- **Setup Chore 1 (GitHub Repository):** Use `[Sprint-0]-chore-12-github-repository-step-by-step.md`
- **Setup Chore 2 (React Frontend):** Use `[Sprint-0]-chore-13-initialize-react-frontend-step-by-step.md`
- **Setup Chore 3 (Express Backend):** Use `[Sprint-0]-chore-14-initialize-express-backend-step-by-step.md`

These step-by-step guides provide detailed terminal commands, expected outputs, and troubleshooting tips for each technical setup task.

## 3. Important Notes

- When creating new cards during Sprint 0, use descriptive names that help you track progress
- If using a single board for all sprints, consider using labels (Sprint-0, Sprint-1, Sprint-2) to organize cards
- Reference the source files in the `sprint-0/` folder for the most up-to-date chore details

# project-idea-and-user-discovery
(removed and replaced below)
The ONE thing to extract from ideation (5 minutes max)

Even with experience, do this once:

Write 3 bullets, not pages:
- Primary user (who actually logs in)
- Core pain solved (in one sentence)
- What “success” looks like in MVP terms
- That’s it. No interviews, no discovery, no validation theater.

There are 3 user levels:

### TicketFire – MVP Scope (Revised)

#### Primary Role 1: TicketFire Internal (Admin)
##### Purpose: Operational oversight

Capabilities (MVP):
- Authenticate (login)
- View global events list
- View aggregate revenue per event

Out of Scope (MVP):
- User management
- Refunds
- Reporting exports
- Role configuration UI

Success Criteria:
- Authenticated admin can log in and view a read-only dashboard showing all events and revenue totals.

#### Primary Role 2: Event Organizers (Clients)
##### Purpose: Event creation and sales visibility

Capabilities (MVP):
- Authenticate (login)
- Create events
- View own events
- View revenue per event

Out of Scope (MVP):
- Seating maps
- Promotions/discounts
- Analytics beyond totals

Success Criteria:
- Authenticated organizer can create an event and view it on their dashboard with revenue data.

#### Optional Role 3: Customers (Ticket Buyers)
##### Purpose: Ticket validation and redemption

Status: Optional / Stretch Goal
Capabilities (If Implemented):

Authenticate (login)
- View owned, unexpired tickets
- Access ticket QR code to validate or redeem (email or dashboard)

Out of Scope (MVP):
- Payments
- Transfers
- Refunds

Success Criteria (If Implemented):
- Authenticated customer can view valid tickets associated with their account.

## Next Steps (2-3 Hours Over 2-3 Days)
(removed)

# User Stories Template
(removed)

## Required User Stories (Authentication & Core Features)

### Story 0: Connect Database to Backend (Chore/Setup Story)
(removed)

### Story 1: User Registration
(removed)

### Story 2: User Login
(removed)

### Story 3: Protected Routes (Backend)
(removed)

### Story 4: Protected Routes (Frontend)
(removed)

### Story 5: Create [Resource] (Backend)
(removed)

### Story 6: Read [Resources] (Backend)
(removed)

### Story 7: Update [Resource] (Backend)
(removed)

### Story 8: Delete [Resource] (Backend)
(removed)

### Story 9: Display [Resources] List (Frontend)
(removed)

### Story 10: Create [Resource] Form (Frontend)
(removed)

### Story 11: Update [Resource] Form (Frontend)
(removed)

### Story 12: Delete [Resource] (Frontend)
(removed)

### Story 13: User Profile Page
(removed)

### Story 14: Logout Functionality
(removed)

## Additional Stories (Add Based on Your Project)

### Story 15: [Your Custom Feature]
(removed)

## Sprint Breakdown

### Sprint 1: Backend Development (Stories 1-8)
(removed)

### Sprint 2: Frontend Development (Stories 1, 2, 4, 9-14)
(removed)

## Story Status Tracking
(removed)

## Tips for Writing Good User Stories
(removed)

## Story Completion Checklist
(removed)

### Why Sprint 0 → Sprint 1 → Sprint 2 exists (plain-English rationale)
What “Sprint 0” is supposed to be

Sprint 0 is not development. It exists for beginners to:

- Choose a project
- Set up repos
- Pick tools
- Sketch UI
- Decide MVP scope
- Reduce the chance of total derailment

In industry terms, Sprint 0 is:

- “Let’s make sure everyone knows what we’re building and that the project boots.”

### Why they split Sprint 1 (backend) and Sprint 2 (frontend)

This split is pedagogical, not architectural.

- The course is trying to:
- Prevent beginners from jumping into React too early
- Force them to build a real API first
- Avoid tangled frontend/backend development chaos

So they say:

- Sprint 1 = backend foundation
- Sprint 2 = frontend integration

In reality, many teams interleave backend + frontend, but that’s harder to teach to novices.

### Does any of this matter to you?

One structural idea.
- Do backend-first, then frontend.

Instead of “Sprint 0 / 1 / 2”, think in terms of phases:

Phase 0 (already done)

Phase 1: Core system (backend)
- Auth
- Roles
- Events
- Revenue aggregation
- Ticket primitives
- This is where 80% of the real value is.

Phase 2: Proof surface (frontend)

- Dashboards
- Forms
- Read-only views
- Minimal navigation
- Just enough UI to demonstrate the system works.

Reframing the question you're implicitly asking

Not:
“Am I following Sprint 1 and Sprint 2 correctly?”

But:
“Am I building the smallest correct system that demonstrates real understanding?”

If yes, the course machinery has already served its purpose.
