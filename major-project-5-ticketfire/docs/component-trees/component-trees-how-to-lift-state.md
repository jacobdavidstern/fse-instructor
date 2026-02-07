# How to Lift State

When you have a component tree and want to “find state,” you do four passes, in order.

## PASS 1 — Identify dynamic questions, not data

Start by asking:
“What questions does this page need answered at runtime?”

Examples of questions (not variables):
- How many clients are there?
- What events belong to this client?
- Are we still loading?
- Did this request fail?
- Which school is this card showing?

If the answer can change without a page reload → it’s state (not data.)
Let’s apply this.

## 2. Admin Dashboard — PASS 1 (Questions)

Looking at your Admin Dashboard:

```mermaid
AdminDashboardPage
└── StatGrid
    ├── StatCard (Clients count)
    ├── StatCard (Monthly Ticket Sales)
    ├── StatCard (Active Events)
    ├── StatCard (Draft Events)
    ├── StatCard (Monthly Revenue)
    └── StatCard (Annual Revenue)
```

Runtime questions:
- How many clients exist?
- How many active events?
- How many draft events?
- What is monthly revenue?
- What is annual revenue?
- Are these values still loading?
- Did the request fail?
That’s your state surface.

## PASS 2 — Ask: “Who needs the same answer?”

Now, for each question, ask:
“Do multiple components need the same answer?”
Example:
Do all StatCards depend on the same fetch? → yes
Does the Header need these stats? → no
Does Sidebar care? → no
So the lowest common ancestor of all StatCards is: AdminDashboardPage
That’s where state lifts to.

## PASS 3 — Decide ownership vs consumption
Now you annotate:
Owner: fetches, stores, handles loading/error
Consumers: receive props and display only

For Admin Dashboard, that gives:
AdminDashboardPage owns:
- dashboardStats
- isLoading
- error
StatGrid and StatCard consume only.

## PASS 4 — Annotate the tree (now you draw)

Here’s the completed state-lifted version of your Admin Dashboard:

```mermaid
AdminDashboardPage
├── owns: fetchAdminDashboardStats()
├── owns: stats, isLoading, error
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       └── StatGrid
│           ├── StatCard (clientsCount)
│           ├── StatCard (monthlyTicketSales)
│           ├── StatCard (activeEvents)
│           ├── StatCard (draftEvents)
│           ├── StatCard (monthlyRevenue)
│           └── StatCard (annualRevenue)
```

That’s lifting state — no guesswork, no vibes.
Now repeat the SAME method

## 3. Client Dashboard — PASS 1 (Questions)

Your tree:
```mermaid
ClientDashboardPage
└── StatGrid
└── SchoolStatsGrid
```

Ask runtime questions:
- What are this client’s totals?
- What are this client’s monthly/annual stats?
- What are Marshall HS stats?
- What are Warren HS stats?
- Is data loading?
- Did it error?
Again: one data source, many consumers.

## PASS 2 — Who needs the same answers?

`StatGrid` needs totals
`SchoolStatsGrid` needs per-school breakdown
They come from the same fetch
Lowest common ancestor: `ClientDashboardPage`

## PASS 3 — Ownership decision

ClientDashboardPage owns:
- clientDashboardStats
- isLoading
- error

## PASS 4 — Annotated tree

ClientDashboardPage
├── owns: fetchClientDashboardStats()
├── owns: stats, isLoading, error
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       ├── StatGrid
│       │   ├── StatCard
│       │   ├── StatCard
│       │   ├── StatCard
│       │   └── StatCard
│       └── SchoolStatsGrid
│           ├── SchoolCard
│           └── SchoolCard
Same lifting pattern, different shape.

## 5. Client Events List — PASS 1 (Questions)

Your tree:

```mermaid
ClientEventsPage
└── EventsList
    └── EventCard
```

Runtime questions:
What events exist?
Are they loading?
Did fetch fail?
Has an event been deleted?

## PASS 2 — Shared answers?

All EventCards depend on the same list
Page header may need to trigger refresh
Lowest common ancestor: ClientEventsPage

## PASS 3 — Ownership

ClientEventsPage owns:
- events[]
- isLoading
- error

## PASS 4 — Annotated tree

```mermaid
ClientEventsPage
├── owns: fetchEvents()
├── owns: events[], isLoading, error
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