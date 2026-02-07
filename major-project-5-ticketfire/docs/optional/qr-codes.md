// QR Codes vs. Customer Ticket Access (MVP Decision)

While emailing tickets is an easy default, it is out of scope for this project. Allowing customers to access their own tickets directly provides far more value and solves real operational problems. If forced to choose, customer access clearly outweighs QR codes—even if tickets are represented only by plain UUIDs with no barcode at all. QR codes are useful, but they are ultimately a presentation and delivery enhancement that can be layered on later.

Customer access enables concrete benefits:
- Self-service ticket recovery
- Reduced support overhead
- Clear ownership and authentication boundaries
- A more credible and complete system narrative

Even without email delivery, QR codes, or scanning functionality, a system that lets customers log in and retrieve their tickets is coherent, defensible, and valuable. This prioritization reflects product value rather than demo polish.

MVP Priority Order
1. A minimal but complete MVP should focus on:
2. Customer authentication
3. Customer ticket listing (unexpired tickets only)
  - Ticket detail view including:
  - UUID
  - Event title and date
  - Ticket type
4. (Optional, later) QR code rendering

Stopping at the ticket detail view still results in a functional and convincing system. QR codes are not required to justify the architecture or user experience.

Architectural Approach

The cleanest solution is to build customer ticket access without any QR assumptions. A ticket detail endpoint can be defined as:

GET /tickets/:id

Returning ticket metadata only. If QR codes are added later, they can be introduced via a separate endpoint such as:
```sh
GET /tickets/:id/qr
```
This creates a clean architectural seam. Nothing upstream changes, and QR rendering can be added or removed without affecting the rest of the system.

External QR services introduce network dependencies, API key management, and demo fragility, reducing overall robustness. If QR codes are ever implemented, a simple server-side SVG generator is likely faster, more reliable, and easier to explain—but it is not necessary for the MVP.

Bottom Line

Prioritizing customer access over QR codes is the correct decision. UUID-based ticket viewing is sufficient for an MVP, and QR codes can be layered later without architectural changes.

Define the customer ticket routes
Sketch the MVP customer dashboard UI
