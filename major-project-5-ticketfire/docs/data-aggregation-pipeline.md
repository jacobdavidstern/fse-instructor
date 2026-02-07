// Data Aggregation Pipeline

## Conceptually: what an aggregation pipeline is doing here

For TicketFire, every aggregation pipeline answers some version of:

“From the set of tickets, filter → group → sum → reshape.”

Because you made tickets immutable and self-contained, all revenue math starts from tickets.

### The pipeline stages you’ll use are mostly:
```json
$match — filter tickets by role / scope
$lookup — join tickets → events (for organizer/admin views)
$group — aggregate revenue
$project — shape output for dashboards
$sort — optional, for display
```

## The pipelines you actually need
A. Organizer Dashboard Revenue (per event)

Question being answered:
“For this organizer, how much face value revenue did I earn per event?”

### Pipeline (tickets → events)
```js
[
  // Only tickets for events owned by this organizer
  {
    $lookup: {
      from: 'events',
      localField: 'eventId',
      foreignField: '_id',
      as: 'event'
    }
  },
  { $unwind: '$event' },

  {
    $match: {
      'event.organizerId': organizerId
    }
  },

  // Group by event
  {
    $group: {
      _id: '$eventId',
      eventTitle: { $first: '$event.title' },
      totalFaceValue: { $sum: '$pricing.faceValue' },
      ticketsSold: { $sum: 1 }
    }
  },

  {
    $project: {
      _id: 0,
      eventId: '$_id',
      eventTitle: 1,
      ticketsSold: 1,
      totalFaceValue: 1
    }
  }
]
```

What this gives you:

One row per event
No assumptions about ticket types

B. Admin Dashboard (TicketFire revenue)

Question being answered:
“How much did TicketFire earn in fees?”

This one is simpler — no need to group by event unless you want to.

### Pipeline (global)
```js
[
  {
    $group: {
      _id: null,
      totalFeesCollected: { $sum: '$pricing.fee' },
      totalTicketsSold: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      totalFeesCollected: 1,
      totalTicketsSold: 1
    }
  }
]
```

That’s your headline number.

### Optional: Admin Revenue by Event (nice but not required)
If you want admin to see fee totals per event:
```js
[
  {
    $lookup: {
      from: 'events',
      localField: 'eventId',
      foreignField: '_id',
      as: 'event'
    }
  },
  { $unwind: '$event' },

  {
    $group: {
      _id: '$eventId',
      eventTitle: { $first: '$event.title' },
      totalFees: { $sum: '$pricing.fee' },
      ticketsSold: { $sum: 1 }
    }
  }
]
```

### Customer Tickets (unexpired only)

Question being answered:
“Which valid tickets does this customer currently have?”
```js
[
  {
    $match: {
      customerId: customerId
    }
  },
  {
    $lookup: {
      from: 'events',
      localField: 'eventId',
      foreignField: '_id',
      as: 'event'
    }
  },
  { $unwind: '$event' },

  {
    $match: {
      'event.date': { $gte: new Date() }
    }
  },

  {
    $project: {
      ticketId: '$_id',
      eventTitle: '$event.title',
      eventDate: '$event.date',
      type: 1
    }
  }
]
```

If you want next, I can:

- Turn these into reusable service functions
- Help you index the collections correctly
- Decide which aggregations to compute server-side vs on request
