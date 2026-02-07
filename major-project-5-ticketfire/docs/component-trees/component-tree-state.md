# Component Tree State
- Draw component trees to reason about complexity and shared state.
- Simple, single-purpose pages still get trees — they’re just shallow.
- Dashboards are deep, full trees.
- Forms and auth pages are shallow, minimal trees.

-[x]
## 1. Login Component Tree

Purpose:
- Auth boundary
- Redirect logic
- Error handling
- Form state vs global auth state

- LoginForm owns inputs
- LoginPage reacts to auth success/failure
- AuthContext handles global auth

```mermaid
LoginPage
├── (public route)
├── AuthLayout
│   └── LoginForm
│       ├── EmailInput
│       ├── PasswordInput
│       └── SubmitButton
```

Compressed Format
```mermaid
LoginPage [owns: authError]
├── AuthLayout
│   └── LoginForm [owns: formState, isSubmitting]
```

-[x]
## 2. Admin Dashboard Component Tree

Purpose:
- Auth boundary
- Aggregated system metrics
- Read-only summary view
- Operational snapshot for administrators

AdminDashboardPage owns:
- dashboardStats
- isLoading
- error
- StatGrid and StatCard consume only

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

-[x]
## 3. Client Dashboard Component Tree

Purpose:
- Auth boundary
- Aggregated account-level metrics
- Read-only summary view
- Snapshot of event and revenue performance

ClientDashboardPage owns:
- dashboardStats
- isLoading
- error
- StatGrid and SchoolCard consume only

```mermaid
ClientDashboardPage
├── owns: fetchClientDashboardStats()
├── owns: stats, isLoading, error
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

-[x]
## 4. Client Create Event page
Purpose:
- Multiple inputs
- Validation
- Draft vs publish
- Submission state
- Possible reuse later (edit event)

Client Create Event Component Tree
```mermaid
ClientCreateEventPage
├── (auth guard)
├── AppLayout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│       └── EventForm
│           ├── TextInput (Event Name)
│           ├── SelectInput (Event Host)
│           ├── TextArea (Description)
│           ├── DateTimeInput (Date/Time)
│           ├── TextInput (Venue)
│           ├── SelectInput (Doors Open Early)
│           ├── NumberInput (Capacity)
│           ├── PrimaryButton (Publish)
│           └── SecondaryButton (Save Draft)
State ownership (this is the key part)
ClientCreateEventPage [owns: submissionError]
├── AppLayout
│   └── MainContent
│       └── EventForm [owns:
│           formData,
│           isSubmitting,
│           validationErrors
│       ]
```
Why the split:
- Page handles navigation + auth + API outcome
- Form handles inputs and validation
- Buttons stay dumb
- This prevents form logic from bleeding over.

-[x]
## 5. Client Events List Component Tree

Purpose:
- Auth boundary
- List and manage client events
- Entry point for event creation
- Error and loading handling

Owner:
- ClientEventsPage
Consumers:
- EventsList
- EventCard


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
