Phase 1: Lock the page-level contract
Step 1 — List your 5 pages (routes)

Create a document called something like:

/docs/component-plan.md

Start with this:

## Pages (Routes)

### Public

1. /login
   - Role: Admin + Client
   - Purpose: Authenticate user and redirect by role
   - Auth required: No

### Admin

2. /admin
   - Purpose: Admin overview dashboard
   - Auth required: Yes (admin)

### Client

3. /trinity
   - Purpose: Client dashboard overview
   - Auth required: Yes (client)

4. /trinity/events
   - Purpose: Empty / initial events state
   - Auth required: Yes (client)

5. /trinity/events/:id
   - Purpose: Create or edit an event
   - Auth required: Yes (client)

Keep purposes one sentence max.
This prevents scope creep later.

This already satisfies part of:
Component responsibilities

Auth planning

Phase 2: Identify reusable components (before trees)
Step 2 — Reusable components inventory

From your wireframes, extract visual repetition, not logic.

Create a section:

## Layout Components

- AppLayout
  - Wraps sidebar + header + page content

- Sidebar
  - Role-specific navigation
  - Appears on all admin + client pages

- Header
  - Page title, optional actions
  - Appears on all admin + client pages

## Auth Components

- LoginForm
  - Used on /login
  - Inputs + submit only

- AuthInput
  - Reusable text/password input

## Dashboard Components

- StatCard (medium)
  - Displays label + numeric value
  - Used heavily on admin + client dashboards

- StatGrid
  - Handles rows / layout of StatCards

## Client Components

- SchoolCard
  - Displays school-level metrics
  - Optional category breakdown section

- SchoolStatsList
  - Renders multiple SchoolCards

## Event Components (shared conceptually)

- EventForm
  - Used for create/edit event
  - Receives submit handler as prop

- EventInput
  - Text / textarea fields

- EventSelect
  - Dropdowns (school, time increment)

## UI Utility Components

- PrimaryButton
- SecondaryButton
- LoadingSpinner
- ErrorBanner

Rules:
- No component owns data yet
- No hooks mentioned
- Minimum 5 is easy here (you’ll likely have 7–10)

Acceptance criteria satisfied:
Reusable components identified (min 5)

Phase 3: Draw component trees (page by page)
Step 3 — Component tree (ASCII is fine)

Do one page at a time. Example:

## Component Tree — Dashboard Page

DashboardPage
├── Navbar
├── PageHeader
├── ResourceList
│   ├── ResourceCard
│   ├── ResourceCard
│   └── ResourceCard
└── LoadingSpinner (conditional)

Notes:

Pages end in Page
Containers > lists > items
Conditional components are annotated, not duplicated

Repeat for all 5 pages.
Do not optimize yet. This is structural only.

Acceptance criteria:

Component tree drawn for all 5 pages

Phase 4: Data ownership (this is the critical thinking part)
Now we answer:
“Where does data live?”
Step 4 — For each page, list data needs

Example:

## Data Requirements — DashboardPage

Data needed:
- resources[] (array)
- isLoading (boolean)
- error (string | null)

Ownership:
- resources → page-level state
- isLoading → shared UI state
- error → shared UI state

Passed as props:
- ResourceCard receives resource

Rules of thumb (important):

Pages fetch data

Components display data

Forms manage their own inputs

Auth lives globally

If you follow this, you won’t fight React later.

Phase 5: Authentication & global state (keep this small)
Step 5 — Auth state plan (Context API)

Create a section:

## Authentication State Management

Approach:
- React Context API

AuthContext provides:
- user
- token
- isAuthenticated
- login()
- logout()
- loading

Stored:
- token in memory (and/or localStorage)
- user decoded from token or fetched

Important:
You are planning, not implementing. No code yet.

This alone checks multiple rubric boxes.

Step 6 — Global vs local state table

This is excellent to include and rare at bootcamp level.

## State Management Decisions

| State               | Scope    | Owner          |
|---------------------|----------|----------------|
| Auth user/token     | Global   | AuthContext    |
| Loading indicators  | Shared   | UI pattern     |
| Error messages      | Shared   | UI pattern     |
| Form inputs         | Local    | Form component |
| Resource data       | Page     | Page component |

If a reviewer sees this, they immediately know you’re thinking correctly.

Phase 6: Final documentation pass (don’t skip)
Step 7 — Component responsibility summaries

For each reusable component, add 1–2 lines:

### Navbar
- Renders navigation links
- No data fetching
- Receives auth status as prop

### ResourceCard
- Displays resource summary
- Stateless
