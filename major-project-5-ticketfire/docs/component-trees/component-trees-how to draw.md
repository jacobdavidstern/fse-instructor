# Drawing a Component Tree

> Start with the component that owns the route and data, then break it down into layout, then content, then pure UI elements.

## The four-layer decomposition

### 1. Route / Page Owner
Question:
> “Which component corresponds to the URL?”

This is always the root of your tree.
Example:
AdminDashboardPage

This component:
- Owns data fetching
  This component is responsible for deciding what data is needed and when to request it.

  In practice:
  API calls are initiated here (or via hooks called here)
  Child components never decide to fetch
  Children receive data via props

- Owns auth guards
  This component decides whether the page can be viewed at all.

  That includes:
  “Is the user logged in?”
  “Is the user the right role?”
  “Should we redirect?”

  This logic never belongs in:
  cards
  lists
  forms
  layout components
- Owns page-level state
  State that affects the entire page, not just one widget, lives here.

  Examples:
  events[]
  isLoading
  error
  selectedEventId (if the page controls selection)

  Contrast with local state

  Page-level state:
  Affects multiple child components
  Comes from API or auth context

  Component-level state:
  Form inputs
  Toggle open/closed
  Temporary UI behavior

  If you ever ask:
  “Should this state be shared?”
  If yes → page-level
  If no → local

### 2. Layout Components
Question:
> “What structure wraps the page?”

This is where AppLayout, Sidebar, and Header live.
Example:
AdminDashboardPage
└── AppLayout
....├── Sidebar
....├── Header
....└── MainContent

Layout components:
- Do not fetch data
- Do not own business logic
- Exist to enforce structure

### 3. Section / Container Components
Question:
> “What chunks of the page could I describe in a sentence?”

These are your dashboard sections, lists, grids, forms.
Example:
MainContent
└── StatGrid

These:
- Receive data as props
- May manage local UI state
- Orchestrate smaller components

### 4. Leaf / Presentational Components
Question:
> “What renders actual pixels and nothing else?”

These are cards, buttons, inputs, text blocks.
Example:
StatGrid
└── StatCard
....├── StatLabel
....└── StatValue

Leaf components:
- Stateless (or very local state)
- No awareness of routing
- No awareness of auth

> If you think in ownership → structure → content → presentation, the answers become obvious.

### How this looks when drawing by hand

When sketching:
1. Write the Page component at the top
2. Draw a box around layout
3. Divide into sections
4. Finish with leaf components

You don’t need to draw every button — only meaningful units.

A good test:
> Could I hand this tree to someone else and they’d know where to put code?
If yes, you’re done.

Crisp sentence for your component plan:
> “Component trees are drawn by starting at the route-level page component, then decomposing into layout, section containers, and finally presentational components.”

## Part 2 — Admin Component Tree

### Admin Dashboard — Component Tree
```mermaid
AdminDashboardPage
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       └── StatGrid
│           ├── StatCard (Clients count)
│           ├── StatCard (Monthly Ticket Sales)
│           ├── StatCard (Active Events)
│           ├── StatCard (Draft Events)
│           ├── StatCard (Monthly Revenue)
│           └── StatCard (Annual Revenue)
```

## Part 3 — Client Events List Component Tree

### Client Events Page
```mermaid
ClientEventsPage
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       ├── PageHeader
│       │   └── CreateEventButton
│       └── EventsList
│           ├── EventCard
│           ├── EventCard
│           └── EventCard
```

## Part 4 - Client Dashboard

### Client Dashboard

```mermaid
ClientDashboardPage
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       ├── StatGrid
│       │   ├── StatCard (Monthly Ticket Revenue)
│       │   ├── StatCard (Annual Ticket Revenue)
│       │   ├── StatCard (Monthly Events)
│       │   └── StatCard (Monthly Tickets)
│       └── SchoolStatsGrid
│           ├── SchoolCard (Marshall HS Monthly Revenue)
│           └── SchoolCard (Warren HS Monthly Revenue)
```

## Wireframes renamed to align
├── 1-login.png
├── 2-admin-dashboard.png
├── 3-client-dashboard.png
├── 4-client-new-event.png
└── 5-client-events.png

## Mark state ownership on trees

Method 1 — Annotate state at the owning node (recommended)
You explicitly list state only where it lives.
Example (annotated tree)
ClientDashboardPage
├── state:
│   ├── statsData
│   ├── schoolStats
│   ├── isLoading
│   └── error
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       ├── StatGrid (receives statsData)
│       │   └── StatCard (props only)
│       └── SchoolStatsList (receives schoolStats)
│           └── SchoolCard (props only)
Rules:
Only owners list state
Children say “receives X”
Leaf components never list state
This communicates intent instantly.

Method 2 — Inline ownership tags (compact & reviewer-friendly)
You add lightweight tags inline:
ClientDashboardPage [owns: statsData, schoolStats, isLoading, error]
├── AppLayout
│   └── MainContent
│       ├── StatGrid [props: statsData]
│       │   └── StatCard
│       └── SchoolStatsList [props: schoolStats]
│           └── SchoolCard
This is great if space is tight or you’re documenting multiple trees.

Mark data-fetch boundaries
Add loading/error flow annotations
Do the Create Event page (great form example)
Translate one tree into a JSX skeleton

